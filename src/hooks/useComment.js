import { useState } from "react";
// import { useDispatch } from "react-redux";
import { useAddCommentMutation } from "../store/services/coments";

export const Comments = () => {
  const [addComment] = useAddCommentMutation();
  const [comment, setComment] = useState("");

  // const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      addComment({ comment });
      setComment("");
    }
  };

  return { handleSubmit, comment, setComment };
};
