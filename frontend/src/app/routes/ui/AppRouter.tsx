import {Route, Routes} from "react-router-dom";
import {routerConfig} from "@/shared/config/routerConfig.tsx";
import {ProtectedRoute} from "./ProtectedRoute.tsx";

export const AppRouter = () => {
  return (
    <Routes>
      {routerConfig.map(({ element, path, isPrivate }) => (
        <Route
          path={path}
          element={
            isPrivate ? <ProtectedRoute>{element}</ProtectedRoute> : element
          }
        />
      ))}
    </Routes>
  );
};
