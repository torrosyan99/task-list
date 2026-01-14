import type { ReactNode } from "react";

import { ProtectedRoute } from "../ui/ProtectedRoute.tsx";
import { PublicOnlyRoute } from "../ui/PublicOnlyRoute.tsx";

export const wrapRoute = (
  element: ReactNode,
  isPrivate?: boolean,
  isPublicOnly?: boolean,
) => {
  if (isPrivate) {
    return <ProtectedRoute>{element}</ProtectedRoute>;
  }

  if (isPublicOnly) {
    return <PublicOnlyRoute>{element}</PublicOnlyRoute>;
  }

  return element;
};
