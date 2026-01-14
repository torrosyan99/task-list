import { Route, Routes } from "react-router-dom";

import { routerConfig } from "@/shared/config/routerConfig.tsx";

import { wrapRoute } from "../lib/wrapRoute.tsx";

export const AppRouter = () => {
  return (
    <Routes>
      {routerConfig.map(({ element, path, isPrivate, isPublicOnly }) => (
        <Route
          path={path}
          element={wrapRoute(element, isPrivate, isPublicOnly)}
        />
      ))}
    </Routes>
  );
};
