import { createSlice } from "@reduxjs/toolkit";

import type { PostsState } from "./types.ts";
import {allPosts, updatePost} from "./thunks.ts";

const initialState: PostsState = {
  data: [],
  hasPosts:false,
  error: "",
};
const postSlice = createSlice({
  name: "POSTS",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.data.unshift(action.payload);
    },
    deletePosts: (state) => {
      state.data = [];
      state.hasPosts = false
      state.error = ''
    }
  },
  extraReducers: builder => {
    builder.addCase(allPosts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.hasPosts = true;
    })

    builder.addCase(updatePost.fulfilled, (state, action) => {
      const index = state.data.findIndex(post => post.id === action.payload.id);
      console.log(action.payload);
      if(index !== -1) state.data[index] = action.payload;
    })
  },
});

export const { reducer: postsReducer } = postSlice;
export const { actions: postActions } = postSlice;
