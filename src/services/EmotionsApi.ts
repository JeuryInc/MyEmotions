import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${localStorage.getItem('token')}`
});

export const emotionApi = createApi({
  reducerPath: "emotionApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:5001" }),
  endpoints: (builder) => ({
    createEmotion: builder.mutation({
      query: (body) => ({
        url: "/api/Emotion/create",
        method: "POST",
        headers: headers(),
        body,
      }),
      transformResponse: (response) => response
    }),
    getEmotionDetails: builder.mutation({
      query: ({ id }) => ({
        url:  `/api/Emotion/GetEmotionDetail?id=${id}`,
        method: "GET",
        headers: headers(),
      }),
      transformResponse: (response) => response
    }),
  }),
});

export const {
  useCreateEmotionMutation,
  useGetEmotionDetailsMutation
} = emotionApi;
