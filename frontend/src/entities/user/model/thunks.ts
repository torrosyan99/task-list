import { createAsyncThunk } from "@reduxjs/toolkit";

import { API_ENDPOINTS } from "@/shared/api/endpoints.ts";
import { rejectError } from "@/shared/lib/rejectError.ts";

import type { User } from "./types.ts";

export const fetchMe = createAsyncThunk<User, void, { rejectValue: string }>(
  "USER/FETCH_ME",
  async (_, { rejectWithValue }) => {
    try {
      const resp = await fetch(API_ENDPOINTS.auth.me);
      const answer = await resp.json();
      if (resp.status === 200) {
        return answer;
      } else {
        throw Error(answer.message);
      }
    } catch (error) {
      return rejectError(error, rejectWithValue);
    }
  },
);


export const logout = createAsyncThunk<{success:boolean}>(
 "USER/LOGOUT",
  async (_, { rejectWithValue }) => {
    try {
      const resp = await fetch(API_ENDPOINTS.auth.logout);
      return await resp.json();
    }
    catch (error) {
      return rejectError(error, rejectWithValue);
    }
  }
)