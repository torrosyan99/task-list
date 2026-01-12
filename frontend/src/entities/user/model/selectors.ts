import type {RootState} from "@/app/store/store.ts";

export const selectIsAuth = (state: RootState) => Boolean(state.user.data);
