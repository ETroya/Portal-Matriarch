import React from "react";
import "./style.css";
import { useStateContext } from "../../utils/GlobalState";

const IndividualComment = ({ comment, id }) => {
  const [state, dispatch] = useStateContext();

  return (
    <div className="commentDiv">
      <div className="comment-header">
        <p className="comment-author">
          <i>{comment.author}</i>
        </p>
      </div>
      <p>{comment.content}</p>
      <button
        className="like-button"
        onClick={() => dispatch({ type: "add-like", id })}
      >
        Like
      </button>
      {comment.likes} Likes
    </div>
  );
};

export default IndividualComment;
