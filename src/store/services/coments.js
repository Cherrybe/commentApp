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
