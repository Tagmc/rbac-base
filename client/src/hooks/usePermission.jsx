import { rolePermissions } from "~/config/rbacConfig";


// Custom Hook to check user's permission
export const userPermission = (userRole) => {
  const hasPermission = (permission) => {
    const allowedPermissions = rolePermissions[userRole] || [];
    return allowedPermissions.includes(permission);
  };
  return {
    hasPermission,
  };
};
