import React from "react";
import { Comments } from "../hooks/useComment";

const CommentForm = () => {

  const { handleSubmit, comment, setComment } = Comments();

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
