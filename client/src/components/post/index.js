import React from "react";
import Comment from "../comment/index";
import CommentList from "../comment_list/index";
import "./style.css";

import { FaRegComment } from "react-icons/fa";
const Post = ({
  state,
  author,
  date,
  content,
  id,
  addComment,
  commentCount,
  dispatch,
  comments,
  hasComments,
}) => {
  const getCommentButton = () => {
    let buttonLabel;

    if (commentCount === 0) {
      buttonLabel = "Add comment";
    } else if (commentCount === 1) {
      buttonLabel = `1 `;
    } else {
      buttonLabel = `${commentCount} comments`;
    }
    if (addComment === true) {
      buttonLabel = "Close";
    }
    return (
      <button
        value={id}
        name="commentButton"
        onClick={() => {
          console.log(id);
          dispatch({ type: "toggle-comment", id });
        }}
      >
        {buttonLabel} <FaRegComment />
      </button>
    );
  };

  return (
    <div className="post">
      <p>Author: {author}</p>
      <p>{date}</p>
      <hr />
      <h3>Title to a post</h3>
      <p>{content}</p>
      <hr />
      <div className="comments-btns">{getCommentButton()}</div>
      {addComment ? <CommentList comments={comments} /> : null}
      {addComment ? <Comment id={id} dispatch={dispatch} /> : null}
    </div>
  );
};

export default Post;
