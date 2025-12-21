import type { ReactNode } from 'react';
import type { RoutePaths } from '@/shared/config/routePaths/routePaths.tsx';

export interface AppRoute {
  path: RoutePaths;
  element: ReactNode;
}
