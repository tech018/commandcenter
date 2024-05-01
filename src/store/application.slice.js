import { createSlice } from "@reduxjs/toolkit";
import apiSlice from "./api.slice";
const initialState = {
  records: [],
};

export const applicationSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    uApplications: (state, action) => ({
      ...state,
      records: action.payload,
    }),
  },
});

export const { uApplications } = applicationSlice.actions;

export default applicationSlice.reducer;

export const applicationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    GetApplications: builder.mutation({
      query: () => ({
        url: "/application/v1/applications",
        method: "GET",
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetApplicationsMutation } = applicationApiSlice;
