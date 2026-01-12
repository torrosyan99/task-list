import type {RootState} from "@/app/store/store.ts";
import {type TypedUseSelectorHook, useSelector} from "react-redux";

export const useAppSelector:TypedUseSelectorHook<RootState> =  useSelector
