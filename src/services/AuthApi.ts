import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "AuthApi",
  baseQuery: fetchBaseQuery({baseUrl : "https://localhost:5001"}), 
  endpoints: (builder) => ({
    registerUser: builder.mutation({ 
      query: (body) => ({
        url: "/api/auth/register",
        method: "POST",
        body,
      })
    }),
    loginUser: builder.mutation({ 
      query: (body) => ({
        url: "/api/auth/login",
        method: "POST",
        body,
      })
    }),
  }),
});

export const { 
  useRegisterUserMutation,
  useLoginUserMutation
} = authApi;
