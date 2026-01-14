import type {ReactNode} from "react";
import {LoginPage} from "@/pages/LoginPage";
import {HomePage} from "@/pages/HomePage";
import {ProfilePage} from "@/pages/ProfilePage";
import {RegisterPage} from "@/pages/RegisterPage";

export enum PagePaths {
  HOMEPAGE = '/',
  LOGIN = "/login",
  REGISTER = "/register",
  PROFILE = "/profile",
}


interface AppRoute {
  isPrivate?: boolean;
  isPublicOnly?: boolean;
  path: PagePaths;
  element: ReactNode;
}

export const routerConfig:AppRoute[] = [
  {path:PagePaths.HOMEPAGE, element:<HomePage />},
  {path:PagePaths.LOGIN, element:<LoginPage />, isPublicOnly:true},
  {path:PagePaths.REGISTER, element:<RegisterPage />, isPublicOnly:true},
  {path:PagePaths.PROFILE, element:<ProfilePage />, isPrivate:true},
]