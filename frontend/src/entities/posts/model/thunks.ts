import {createAsyncThunk} from "@reduxjs/toolkit";
import type {Post} from "./types.ts";
import {API_ENDPOINTS} from "@/shared/api/endpoints.ts";
import {rejectError} from "@/shared/lib/rejectError.ts";
import {put} from "@/shared/api/http.ts";

export const allPosts = createAsyncThunk<Post[]>('POSTS/ALL_POSTS', async (_, {rejectWithValue}) => {
    try {
      const resp = await fetch(API_ENDPOINTS.lists.get);
      const answer = await resp.json();
      if (resp.status === 200) {
        return answer;
      } else {
        throw Error(answer.message);
      }
    } catch (error) {
       return rejectError(error, rejectWithValue)
    }
});

export const updatePost = createAsyncThunk<Post, Partial<Post>>('POSTS/UPDATE', async (data, {rejectWithValue}) => {
  try {
    return  await  put(API_ENDPOINTS.lists.update, data);
  } catch (error) {
    return rejectError(error, rejectWithValue)
  }
});