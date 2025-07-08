import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Login from "~/pages/Login";
import Dashboard from "~/pages/Dashboard";
import NotFound from "./pages/NotFound";
import AccessDenied from "./pages/AccessDenied";
import RbacRoute from "./components/core/RbacRoute";
import { permissions } from "./config/rbacConfig";
import { TAB_URLS } from "./utils/constants";

/**
 * Giải pháp clean code trong việc xác định các route nào cần đăng nhập tài khoản xong thì mới cho truy cập
 * Sử dụng Outlet của react-router-dom để hiển thị các Child Route
 * @returns
 */

const ProtectedRoutes = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  if (!user) return <Navigate to={"/"} replace={true} />;
  return <Outlet />;
};

const UnAuthorizedRoutes = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  if (user) return <Navigate to={"/dashboard"} replace={true} />;
  return <Outlet />;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace={true} />} />

      <Route element={<UnAuthorizedRoutes />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<ProtectedRoutes />}>
        {/* v6.x.x trở lên */}
        {TAB_URLS.map((item) => 
        <Route
          element={
            <RbacRoute requiredPermission={item.permission} />
          }
        >
          <Route path={item.route} element={<Dashboard />} />
        </Route>)}
        {/* v5.x.x trở xuồng */}
        {/* <Route
          path="/dashboard"
          element={
            <RbacRoute requiredPermission={permissions.VIEW_DASHBOARD}>
              <Dashboard />
            </RbacRoute>
          }
        /> */}
      </Route>
      <Route path="/access-denied" element={<AccessDenied />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
