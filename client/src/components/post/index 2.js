import React from "react";
import Comment from "../comment/index";
import "./style.css";

const Post = ({ state, addComment, author, date, content, id }) => {
  return (
    <div className="post">
      <p>Author: {author}</p>
      <p>{date}</p>
      <hr />
      <h3>Title to a post</h3>
      <p>{content}</p>
      <hr />
      <button value={id} name="commentButton" onClick={addComment}>
        Comment
      </button>
      {state ? <Comment /> : null}
    </div>
  );
};

export default Post;
