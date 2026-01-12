import type {ReactNode} from "react";
import {LoginPage} from "@/pages/LoginPage";
import {HomePage} from "@/pages/HomePage";
import {ProfilePage} from "@/pages/ProfilePage";

export enum PagePaths {
  HOMEPAGE = '/',
  LOGIN = "/login",
  REGISTER = "/register",
  PROFILE = "/profile",
}


interface AppRoute {
  isPrivate?: boolean;
  path: PagePaths;
  element: ReactNode;
}

export const routerConfig:AppRoute[] = [
  {path:PagePaths.HOMEPAGE, element:<HomePage />},
  {path:PagePaths.LOGIN, element:<LoginPage />},
  {path:PagePaths.PROFILE, element:<ProfilePage />, isPrivate:true},
]