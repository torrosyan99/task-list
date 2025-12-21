import { RouterProvider } from 'react-router-dom';
import { router } from '../config/routerConfig/routerConfig.tsx';

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
