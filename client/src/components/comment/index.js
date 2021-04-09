import React, { useState } from "react";

const Comment = ({ id, dispatch }) => {
  const [comment, setComment] = useState();
  return (
    <div className="comment">
      <textarea
        value={comment}
        onChange={(event) => {
          setComment(event.target.value);
        }}
      ></textarea>
      <button
        onClick={(event) => {
          event.preventDefault();

          dispatch({ type: "push-comment", payload: { comment, id } });
        }}
      >
        Post
      </button>
    </div>
  );
};

export default Comment;
