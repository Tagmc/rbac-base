import { StatusCodes } from "http-status-codes";
import { MOCK_ROLES_LEVEL_2 } from "~/models/mock_database_level_2";

// Middleware level 2 phức tạp hơn level 1: Lúc này chúng ta sẽ nhận tham số đầu vào là một mảng các permissions được phép truy cập vào API
// Nhận vào requiredPermissions là một mảng những permissions được phép truy cập vào API
const isValidPermission = (requiredPermissions) => async (req, res, next) => {
  try {
    // Bước 1: middleware RBAC luôn chạy sau authMiddleware, vì vậy đảm bảo JWT token phải hợp lệ và có dữ liệu decoded 
    // Bước 2: Lấy role của user trong dữ liệu payload decoded của jwt token
    const userRole = req.jwtDecoded.role

    // Bước 3: Kiểm tra role 
    if (!userRole) {
        res.status(StatusCodes.FORBIDDEN).json({message: 'Forbidden: Có vấn đề về role của bạn'})
        return
    }

    // Bước 4: Dựa theo role của user rồi tìm tiếp trong database rồi lấy đủ thông tin của role đó
    const fullUserRole = MOCK_ROLES_LEVEL_2.find(item => item.name == userRole)
    if (!fullUserRole) {
        res.status(StatusCodes.FORBIDDEN).json({message: 'Không tồn tại role của bạn trong hệ thống'})
        return
    }

    /* Bước 5: Kiểm tra quyền truy cập.
        * Lưu ý nếu không cung cấp mảng requiredPermissions hoặc mảng requiredPermisions là mảng rỗng thì ý nghĩa ở đây thường là không check quyền => luôn cho phép truy cập API
        * Hàm Every của js sẽ luôn trả về true nếu như mảng sử dụng là rỗng
    */
    const hasPermission = requiredPermissions?.every(i => fullUserRole.permissions.includes(i))
    if (!hasPermission) {
        res.status(StatusCodes.FORBIDDEN).json({
            message: 'Forbidden: Bạn không đủ quyền truy cập tới API này'
        })
        return
    }


    // Bước 6: Nếu role hợp lệ thì cho phép request đi tiếp 
    next()
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: 'Oops! Something went wrong!'})
  }
};

export const rbac_middleware_2 = {
  isValidPermission,
};
