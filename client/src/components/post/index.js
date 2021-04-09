import React from "react";
import Comment from "../comment/index";
import "./style.css";

const Post = ({
  state,
  author,
  date,
  content,
  id,
  addComment,
  commentCount,
  dispatch,
  commentList,
}) => {
  return (
    <div className="post">
      <p>Author: {author}</p>
      <p>{date}</p>
      <hr />
      <h3>Title to a post</h3>
      <p>{content}</p>
      <hr />
      <div className="comments-btns">
        <button
          clsasName=""
          value={id}
          name="commentButton"
          onClick={() => {
            console.log(id);
            dispatch({ type: "toggle-comment", id });
          }}
        >
          Comment
        </button>
        {commentCount > 0 ? (
          <p onClick={() => dispatch({ type: "toggle-comment-list", id })}>
            {commentCount} comments for this post
          </p>
        ) : null}
      </div>
      {commentList ? <h1>comment List</h1> : null}
      {addComment ? <Comment id={id} dispatch={dispatch} /> : null}
    </div>
  );
};

export default Post;
