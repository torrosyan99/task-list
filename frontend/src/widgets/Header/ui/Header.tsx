import { logout, selectIsAuth } from "@/entities/user";

import { useAppDispatch } from "@/shared/hooks/useAppDispatch.ts";
import { useAppSelector } from "@/shared/hooks/useAppSelector.ts";
import { Container } from "@/shared/ui/Container/Container.tsx";
import {Link} from "react-router-dom";
import {PagePaths} from "@/shared/config/routerConfig.tsx";

export const Header = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectIsAuth);
  const logoutFn = () => dispatch(logout());

  return (
    <header className={"py-6"}>
      <Container className="flex items-center">
        {isAuth ? (
          <button className={"ml-auto"} onClick={logoutFn}>
            Выйти
          </button>
        ) : <Link  className={"ml-auto"}  to={PagePaths.LOGIN}>
          Войти
        </Link>}
      </Container>
    </header>
  );
};
