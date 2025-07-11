/*
   * Level 3: Group Roles & Hierarchical RBAC
   * Group Roles: Một user có thể có nhiều roles
   * Hierarchical RBAC: Vai trò có thể kế thừa lại từ vai trò khác
   * CRUD
*/ 

export const MOCK_ROLES_LEVEL_3 = [
    {
        _id: 'role-client-sample-id-12345678',
        name: 'client',
        permissions: [
            'create_support',
            'read_support',
            'update_support',
            'delete_support'
        ],
        inherits: [] // client không kế thừa từ role nào cả
    },
    {
        _id: 'role-moderator-sample-id-12345678',
        name: 'moderator',
        permissions: [
            // messages
            'create_messages',
            'read_messages',
            'update_messages',
            'delete_messages'
        ],
        inherits: ['client'] // moderator kế thừa lại permissions từ client
    },
    {
        _id: 'role-admin-sample-id-12345678',
        name: 'admin',
        permissions: [
            // admin-tools
            'create_admin_tools',
            'read_admin_tools',
            'update_admin_tools',
            'delete_admin_tools',
        ],
        inherits: ['client', 'moderator']
    }
];
export const MOCK_USER_LEVEL_3 = {
  ID: "EmHuyTapCode-sample-id-12345678",
  EMAIL: "emhuytapcode@gmail.com",
  PASSWORD: "EmHuyTapCode@123",
  ROLES: ['client'],
//   ROLES: ['moderator'],
//   ROLES: ['admin'],
//   ROLES: ['admin', 'moderator', 'client']
};