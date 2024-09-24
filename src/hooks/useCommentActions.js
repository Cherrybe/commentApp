import { useState } from "react";

export const useCommentActions = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentCommentId, setCurrentCommentId] = useState(null);

  const handleClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setCurrentCommentId(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCurrentCommentId(null); // Reset the current comment ID
  };

  return {
    anchorEl,
    currentCommentId,
    handleClick,
    handleClose,
  };
};
