//making a new comment component
import React, { useState } from "react";
import { GiBubbles } from "react-icons/gi";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";

import "./style.css";

const Comment = ({ id, dispatch }) => {
  const [comment, setComment] = useState();
  return (
    <div className="comment">
      <textarea
        placeholder="...Enter comment here!"
        className="comment-text"
        value={comment}
        onChange={(event) => {
          setComment(event.target.value);
        }}
      ></textarea>

      <button
        className="post-bubbles"
        onClick={(event) => {
          event.preventDefault();

          dispatch({ type: "push-comment", payload: { comment, id } });
        }}
      >
        <p>
          Post <FaRegComment />
        </p>
      </button>
    </div>
  );
};

export default Comment;
