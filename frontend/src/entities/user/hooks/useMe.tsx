import { useNavigate } from "react-router-dom";

import { PagePaths } from "@/shared/config/routerConfig.tsx";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch.ts";

import { fetchMe } from "../model/thunks";

export const useMe = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return async () => {
    const resultAction = await dispatch(fetchMe());
    if (fetchMe.fulfilled.match(resultAction)) navigate(PagePaths.HOMEPAGE);
  };
};
