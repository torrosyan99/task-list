export const API_ENDPOINTS = {
  auth: {
    me: 'api/auth/me',
    login: 'api/auth/login',
    logout: 'api/auth/logout',
    register: 'api/auth/register',
  },
  lists: {
    create: 'api/lists/create',
    get: 'api/lists',
    update: 'api/lists/update',
  }

} as const;


