import {Login} from "@/features/Login";
import {useAppSelector} from "@/shared/hooks/useAppSelector.ts";
import {selectIsAuth} from "@/entities/user";
import {Navigate} from "react-router-dom";
import {PagePaths} from "@/shared/config/routerConfig.tsx";

export const LoginPage = () => {

  const isAuth = useAppSelector(selectIsAuth);
  if (isAuth) {
    return <Navigate to={PagePaths.HOMEPAGE} replace />;
  }
  return (
    <div className={'grow-1 flex items-center justify-center'}>
      <Login />
    </div>
  );
};
