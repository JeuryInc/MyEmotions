import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${localStorage.getItem('token')}`
});

export const emotionApi = createApi({
  reducerPath: "emotionApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_HOST}),
  endpoints: (builder) => ({ 
    getEmotions: builder.query({
      query: () => {
        return {
          url: "/api/Emotion/GetEmotions",
          method: "GET"
        };
      },
      keepUnusedDataFor: 120,
    }),
    createEmotion: builder.mutation({
      query: (body) => ({
        url: "/api/Emotion/create",
        method: "POST",
        headers: headers(),
        body,
      }),
      transformResponse: (response) => response
    }), 
    getEmotionDetails: builder.query({
      query: ({ emotionId }) => {
        return {
          url:  `/api/Emotion/GetEmotionDetail/${emotionId}`,
          method: "GET"
        };
      },
      keepUnusedDataFor: 120,
    }),    
    getEmotionsByUser: builder.query({
      query: () => {
        return {
          url: "/api/Emotion/GetEmotionsByUser",
          method: "GET",
          headers: headers(),
        };
      },
      keepUnusedDataFor: 120,
    }),
    getEmotionsByTag: builder.query({
      query: ({ tag }) => {
        return {
          url: `/api/Emotion/GetEmotionsByTag/${tag}`,
          method: "GET",
        };
      },
      keepUnusedDataFor: 120,
    }), 
    getTags: builder.query({
      query: () => {
        return {
          url: "/api/Emotion/GetTags",
          method: "GET",
        };
      },
      keepUnusedDataFor: 120,
    }),
  }),
});

export const {
  useGetEmotionsQuery,
  useCreateEmotionMutation,
  useGetEmotionDetailsQuery,
  useGetTagsQuery,
  useGetEmotionsByUserQuery,
  useGetEmotionsByTagQuery
} = emotionApi;
