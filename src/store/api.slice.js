import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiSlice = createApi({
  reducerPath: "api", // optional
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BACKEND_URI}`,
    prepareHeaders: (headers) => {
      // headers.set('x_app_key', config.appkey);
      // return headers;
      const token = sessionStorage?.getItem("access");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Quotes"],
  endpoints: () => ({
    overrideExisting: true,
  }),
});

export default apiSlice;
