import type { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

import { selectIsAuth } from "@/entities/user";

import { PagePaths } from "@/shared/config/routerConfig";
import { useAppSelector } from "@/shared/hooks/useAppSelector";

export const PublicOnlyRoute = ({ children }: PropsWithChildren) => {
  const isAuth = useAppSelector(selectIsAuth);

  if (isAuth) {
    return <Navigate to={PagePaths.HOMEPAGE} replace />;
  }

  return <>{children}</>;
};
