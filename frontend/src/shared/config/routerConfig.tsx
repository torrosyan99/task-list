import type { ReactNode } from "react";

import { HomePage } from "@/pages/HomePage";
import { LoginPage } from "@/pages/LoginPage";
import { RegisterPage } from "@/pages/RegisterPage";
import {CreateTaskPage} from "@/pages/CreateTaskPage";
import {AllTasks} from "@/pages/AllTasks";

export enum PagePaths {
  HOMEPAGE = "/",
  LOGIN = "/login",
  REGISTER = "/register",
  ALL_TASKS = "/all_tasks",
  CREATE_TASK = "/create",
}

interface AppRoute {
  isPrivate?: boolean;
  isPublicOnly?: boolean;
  path: PagePaths;
  element: ReactNode;
}

export const routerConfig: AppRoute[] = [
  { path: PagePaths.HOMEPAGE, element: <HomePage /> },
  { path: PagePaths.LOGIN, element: <LoginPage />, isPublicOnly: true },
  { path: PagePaths.REGISTER, element: <RegisterPage />, isPublicOnly: true },
  { path: PagePaths.ALL_TASKS, element: <AllTasks/>, isPrivate: true },
  { path: PagePaths.CREATE_TASK, element: <CreateTaskPage />, isPrivate: true },
];
