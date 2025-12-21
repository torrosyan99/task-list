import type { AppRoute } from '../../types';
import { RoutePaths } from '@/shared/config/routePaths/routePaths.tsx';
import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../ui/ProtectedRoute.tsx';
import { LoginPage } from '@/pages/LogiPage';

const privateRoutes: AppRoute[] = [
  {
    element: <>1</>,
    path: RoutePaths.MAIN,
  },
];

export const publicRoutes: AppRoute[] = [
  {
    path: RoutePaths.LOGIN,
    element: <LoginPage />,
  },
];

export const router = createBrowserRouter([
  ...publicRoutes,

  {
    element: <ProtectedRoute />,
    children: privateRoutes,
  },
]);
