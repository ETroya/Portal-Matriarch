import React, { useState } from "react";
import { FaRegComment } from "react-icons/fa";

import "./style.css";
import API from "../../utils/api";

const Comment = ({ id, dispatch }) => {

  const [comment, setComment] = useState();

  const handleComment = (event) => {
    event.preventDefault();


    //set comment in database
    API.addComment(comment, id).then((res) => {
      console.log(res);
      dispatch({ type: "push-comment", payload: { comment, id } });
    })

    
  }
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
        onClick={(event) => handleComment(event)}
      >
        <p>
          Post <FaRegComment />
        </p>
      </button>
    </div>
  );
};

export default Comment;
