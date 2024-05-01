import { createSlice } from "@reduxjs/toolkit";
import apiSlice from "./api.slice";

const initialState = {
  credentials: {
    email: null,
    token: null,
  },
};

export const authSlice = createSlice({
  name: "credentials",
  initialState,
  reducers: {
    ucredentials: (state, action) => {
      state.credentials.email = action.payload.email;
      state.credentials.token = action.payload.token;
      return state;
    },
  },
});

export const { ucredentials } = authSlice.actions;

export default authSlice.reducer;

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    PostLoginUser: builder.mutation({
      query: (args) => ({
        url: "/auth/v1/admin/login",
        method: "POST",
        body: args,
      }),
    }),
  }),
  overrideExisting: true,
});

export const { usePostLoginUserMutation } = authApiSlice;
