import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../baseQueries/axiosBaseQuery";
import { baseURL } from "../../constants/url";

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: axiosBaseQuery({ baseUrl: baseURL }),
  tagTypes: ["Comment"],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => ({ url: "/comments", method: "GET" }),
      providesTags: ["Comment"],
    }),
    addComment: builder.mutation({
      query: (newComment) => ({
        url: "/comments/add",
        method: "POST",
        body: newComment,
      }),
      // invalidatesTags: ["Comment"],
      // Manually update cache with optimistic UI update
      async onQueryStarted(newComment, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          // Optimistically update the cache
          dispatch(
            commentsApi.util.updateQueryData(
              "getComments",
              undefined,
              (draft) => {
                draft.comments.unshift(data);
              }
            )
          );
        } catch (err) {
          console.error("Error adding comment:", err);
        }
      },
    }),
    deleteComment: builder.mutation({
      query: (id) => ({
        url: `/comments/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          commentsApi.util.updateQueryData(
            "getComments",
            undefined,
            (draft) => {
              // Remove the deleted comment from the draft
              const index = draft.comments.findIndex(
                (comment) => comment.id === id
              );
              if (index !== -1) {
                draft.comments.splice(index, 1);
              }
            }
          )
        );
      },
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useAddCommentMutation,
  useDeleteCommentMutation,
} = commentsApi;
