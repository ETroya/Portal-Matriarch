import React from "react";
import Comment from "../comment/index";
import CommentList from "../comment_list/index";
import "./style.css";

import { FaRegComment } from "react-icons/fa";

const Post = ({
  state,
  author,
  date,
  title,
  content,
  id,
  addComment,
  commentCount,
  dispatch,
  comments,
}) => {
  const getCommentButton = () => {
    let buttonLabel;

    if (commentCount === 0) {
      buttonLabel = "Add comment";
    } else if (commentCount === 1) {
      buttonLabel = `1 comment`;
    } else {
      buttonLabel = `${commentCount} comments`;
    }
    if (addComment === true) {
      buttonLabel = "X";
    }
    return (
      <div className="clearfix">
        <button
          className="comment-button"
          value={id}
          name="commentButton"
          onClick={() => {
            console.log(id);
            dispatch({ type: "toggle-comment", id });
          }}
        >
          {buttonLabel}
        </button>
      </div>
    );
  };

  return (
    <div className="post">
      <p className="postInfo postAuthor">{author}</p>
      <p className="postInfo postDate">
        <i>{date}</i>
      </p>

      <h4 className="post-title">{title}</h4>
      <p>{content}</p>

      <div className="comments-btns">{getCommentButton()}</div>
      {addComment ? <CommentList comments={comments} /> : null}
      {addComment ? <Comment id={id} state={state} dispatch={dispatch} /> : null}
    </div>
  );
};

export default Post;
