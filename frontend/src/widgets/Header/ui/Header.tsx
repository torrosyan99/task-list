import { Link } from "react-router-dom";

import { selectIsAuth } from "@/entities/user";

import { PagePaths } from "@/shared/config/routerConfig.tsx";
import { useAppSelector } from "@/shared/hooks/useAppSelector.ts";
import { Container } from "@/shared/ui/Container/Container.tsx";

import { Logout } from "./Logout.tsx";
import { Menu } from "./Menu.tsx";

export const Header = () => {
  const isAuth = useAppSelector(selectIsAuth);

  return (
    <header className={"py-6"}>
      <Container className="flex items-center gap-3">
        {isAuth ? (
          <>
            <Menu />
            <Logout />
          </>
        ) : (
          <Link className={"ml-auto"} to={PagePaths.LOGIN}>
            Войти
          </Link>
        )}
      </Container>
    </header>
  );
};
