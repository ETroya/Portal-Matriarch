import React, { useState } from "react";
import { useStateContext } from "../../utils/GlobalState";
import Comment from "../comment/index";
import "./style.css";

const Post = ({ author, date, content, id, addComment, dispatch }) => {
  return (
    <div className="post">
      <p>Author: {author}</p>
      <p>{date}</p>
      <hr />
      <h3>Title to a post</h3>
      <p>{content}</p>
      <hr />
      <button
        value={id}
        name="commentButton"
        onClick={() => {
          console.log(`clicked ${id}`);
          dispatch({ type: "toggle-comment", id });
        }}
      >
        Comment
      </button>
      {addComment ? <Comment id={id} /> : null}
    </div>
  );
};

export default Post;
