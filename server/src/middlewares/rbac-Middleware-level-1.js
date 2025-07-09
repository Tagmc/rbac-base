import { StatusCodes } from "http-status-codes";

// Level 1 đơn giản nhất: Nhận vào allowedRoles là một mảng những role được phép truy cập vào API
const isValidPermission = (allowedRoles) => async (req, res, next) => {
  try {
    // Bước 1: middleware RBAC luôn chạy sau authMiddleware, vì vậy đảm bảo JWT token phải hợp lệ và có dữ liệu decoded 
    // Bước 2: Lấy role của user trong dữ liệu payload decoded của jwt token
    const userRole = req.jwtDecoded.role

    // Bước 3: Kiểm tra role, đơn giản nếu user không tồn tại role hoặc role của user không thuộc scope role hợp lệ của api thì sẽ không thể truy cập được
    if (!userRole || !allowedRoles.includes(userRole)) {
        res.status(StatusCodes.FORBIDDEN).json({message: 'You are not allowed to access this API'})
        return
    }
    // Bước 4: Nếu role hợp lệ thì cho phép request đi tiếp 
    next()
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: 'Oops! Something went wrong!'})
  }
};

export const rbac_middleware_1 = {
  isValidPermission,
};
