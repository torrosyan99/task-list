import { useEffect, useState } from "react";

import { AppRouter } from "@/app/routes";

import { fetchMe } from "@/entities/user";

import { useAppDispatch } from "@/shared/hooks/useAppDispatch.ts";

import "./styles/fonts.css";
import "./styles/main.css";
import {Header} from "@/widgets/Header";

export function App() {
  const [checkUser, setCheckUser] = useState(false);
  const dispatch = useAppDispatch();
  console.log('ap')
  useEffect(() => {
    const checkAuth = async () => {
      await dispatch(fetchMe());
      setCheckUser(true);
    };
    checkAuth();
  }, []);
  return <div className="text-primary flex flex-col min-h-[100dvh]">
    <Header />
    {checkUser && <AppRouter />}
  </div>;
}
