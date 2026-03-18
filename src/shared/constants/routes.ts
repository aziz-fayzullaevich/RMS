export const ROUTES = {
    AUTH: {
        LOGIN: '/login',
        REGISTER: '/register',
    },
    USER: {
        DASHBOARD: '/dashboard',
        MY_REQUESTS: '/my-requests',
        REQUEST_LIST: '/request-list',
        PROFILE: '/profile',
    },
    ADMIN: {
        USERS_LIST: '/admin/users-list',
        ALL_REQUESTS: '/admin/all-requests',
        INCOMING: '/admin/incoming',
        PROFILE: '/admin/profile',
    }
} as const;