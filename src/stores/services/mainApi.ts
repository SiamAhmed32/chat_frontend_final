import { URL } from "@/lib/constant";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${URL.api}/api`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("userToken");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["user", "chat", "Message"],
  endpoints: (builder) => ({}),
});
