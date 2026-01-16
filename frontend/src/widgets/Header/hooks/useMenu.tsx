import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useMenu = (showMenu: boolean, setShowMenu: (val:boolean) => void) => {
  const location = useLocation();
  useEffect(() => {
    setShowMenu(false)
  }, [location]);

  useEffect(() => {
    if (showMenu) {
      document.body.style.height = "100dvh";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.height = "";
      document.body.style.overflow = "";
    };
  }, [showMenu]);
};
