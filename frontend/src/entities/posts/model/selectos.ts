import type {RootState} from "@/app/store/store.ts";

export const selectPosts = (state: RootState) => state.posts.data;
export const selectHasPosts = (state: RootState) => state.posts.hasPosts;
