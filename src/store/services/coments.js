import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../baseQueries/axiosBaseQuery";
import { baseURL } from "../../constants/url";

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: axiosBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => ({ url: "/comments", method: "GET" }),
    }),
    addComment: builder.mutation({
      query: (newComment) => ({
        url: "/comments",
        method: "POST",
        body: newComment,
      }),
      deleteComment: builder.mutation({
        query: (id) => ({ 
          url: `/comments/${id}`, 
          method: "DELETE" 
        }),
      })
    }),
  }),
});

export const { useGetCommentsQuery, useAddCommentMutation, useDeleteCommentMutation } =
  commentsApi;