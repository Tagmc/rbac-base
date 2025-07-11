/*
   * Level 2: Vẫn là một user chỉ được gần với 1 vai trò (role) duy nhất, nhưng mỗi role có thể có nhiều quyền hạn (permission) khác nhau được chia nhỏ ra
   * CRUD
*/ 

export const MOCK_ROLES_LEVEL_2 = [
    {
        _id: 'role-client-sample-id-12345678',
        name: 'client',
        permissions: [
            'create_support',
            'read_support',
            'update_support',
            'delete_support'
        ]
    },
    {
        _id: 'role-moderator-sample-id-12345678',
        name: 'admin',
        permissions: [
            // supports
            'create_support',
            'read_support',
            'update_support',
            'delete_support',
            // messages
            'create_messages',
            'read_messages',
            'update_messages',
            'delete_messages'
        ]
    },
    {
        _id: 'role-moderator-sample-id-12345678',
        name: 'admin',
        permissions: [
            // supports
            'create_support',
            'read_support',
            'update_support',
            'delete_support',
            // messages
            'create_messages',
            'read_messages',
            'update_messages',
            'delete_messages',
            // admin-tools
            'create_admin_tools',
            'read_admin_tools',
            'update_admin_tools',
            'delete_admin_tools',
        ]
    }
];
export const MOCK_USER_LEVEL_2 = {
  ID: "EmHuyTapCode-sample-id-12345678",
  EMAIL: "emhuytapcode@gmail.com",
  PASSWORD: "EmHuyTapCode@123",
  ROLE: 'admin',
};