import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BurgerSvg from '@icons/burger.svg?react';
import { PagePaths } from "@/shared/config/routerConfig.tsx";
import { classNames } from "@/shared/lib/classNames.ts";
import {useMenu} from "../hooks/useMenu.tsx";

export const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  useMenu(showMenu, setShowMenu);
  const openMenu = () => setShowMenu(true);
  const closeMenu = () => setShowMenu(false);
  return (
    <>
      <button className={"order-1 md:hidden"} onClick={openMenu}>
        <BurgerSvg />
      </button>
      <div
        onClick={closeMenu}
        className={classNames(
          `absolute top-0 w-full left-0 h-screen 
        z-40 bg-black-o md:hidden`,
          [],
          {
            hidden: !showMenu,
          },
        )}
      />
      <div
        className={classNames(
          `absolute top-0 left-0 bottom-0 text-secondary z-50 
           bg-primary p-6 pr-10 flex flex-col gap-x-6 gap-y-4 transition-transform
           md:bg-transparent md:static md:flex-row md:text-primary md:p-0`,
          [],
          {
            "translate-x-[-101%] md:translate-x-0": !showMenu,
          },
        )}
      >
        <Link to={PagePaths.ALL_TASKS}>Все задачы</Link>
        <Link to={PagePaths.CREATE_TASK}>Создать задачу </Link>
      </div>
    </>
  );
};
