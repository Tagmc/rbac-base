import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { userPermission } from "~/hooks/usePermission";
import { roles } from "~/config/rbacConfig";

const RbacRoute = ({
  requiredPermission,
  redirectTo = "/access-denied",
  children,
}) => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const userRole = user?.role || roles?.CLIENT;

  const { hasPermission } = userPermission(userRole);

  if (!hasPermission(requiredPermission)) {
    return <Navigate to={redirectTo} replace={true} />
  }

  // v6.x.x trở lên
  return <Outlet />

  // dùng từ v5.x.x trở xuống
//   return children
};

export default RbacRoute;
