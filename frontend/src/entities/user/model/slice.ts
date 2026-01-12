import { createSlice } from "@reduxjs/toolkit";

import type { UserState } from "./types.ts";
import {fetchMe, logout} from './thunks.ts'

const initialState: UserState = {
  data: null,
  error: null
};

const userSlice = createSlice({
  name: "USER",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMe.fulfilled, (state, action) => {
      state.data = action.payload;
      state.error = null;
    })
    builder.addCase(fetchMe.rejected, (state, action) => {
      state.error = action.payload ?? 'Ошибка';
    })

    builder.addCase(logout.fulfilled, (state) => {
      state.data = null;
    })
  },
});


export const { reducer: userReducer } = userSlice;
