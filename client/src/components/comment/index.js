//making a new comment component
import React, { useState } from "react";
import { FaRegComment } from "react-icons/fa";

import "./style.css";
import API from "../../utils/api";

const Comment = ({ id, dispatch, commentCount }) => {

  const [comment, setComment] = useState();

  const handleComment = (event) => {
    event.preventDefault();
    //set comment in database
    API.addComment(comment, id, commentCount).then((res) => {
      console.log("from index, res.data");
      console.log(res.data.comments);
      dispatch({ type: "push-comment", payload: { comments: res.data.comments, id } });
    });
  };
  
  return (
    <div className="comment">
      <textarea
        placeholder="Enter your comment here."
        className="comment-text"
        value={comment}
        onChange={(event) => {
          setComment(event.target.value);
        }}
      ></textarea>

      <button
        className="post-bubbles"
        onClick={(event) => handleComment(event)}
      >
        <p>
          Send <FaRegComment />
        </p>
      </button>
    </div>
  );
};

export default Comment;
