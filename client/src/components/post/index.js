//making a post to the news feed
import React, { useContext } from "react";
import { authContext, authData } from "../../utils/GlobalState";
import Comment from "../comment/index";
import CommentList from "../comment_list/index";
import API from "../../utils/api";
import "./style.css";
import { now, post } from "jquery";

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
const { authData } = useContext(authContext);

  const getTodaysDate = () => {
    const today = new Date();
    const postDate = new Date(date);

    if (postDate.getDate() === today.getDate()) {
      if (postDate.getHours() === today.getHours()) {
        if (postDate.getMinutes() === today.getMinutes()) {
          if (today.getSeconds() - postDate.getSeconds() === 1) {
            return `${today.getSeconds() - postDate.getSeconds()} seconds ago`;
          }
          return `${today.getSeconds() - postDate.getSeconds()} seconds ago`;
        }
        if (today.getMinutes() - postDate.getMinutes() === 1) {
          return `${today.getMinutes() - postDate.getMinutes()} Minute ago`;
        }
        return `${today.getMinutes() - postDate.getMinutes()} Minutes ago`;
      }
      if (today.getHours() - postDate.getHours() === 1) {
        return `${today.getHours() - postDate.getHours()} Hour ago`;
      }
      return `${today.getHours() - postDate.getHours()} Hours ago`;
    }
    if (today.getDate() - postDate.getDate() === 1) {
      return `${today.getDate() - postDate.getDate()} Day ago`;
    }
    return `${today.getDate() - postDate.getDate()} Days ago`;
  };

  const getCommentButton = () => {
    let buttonLabel;

    if (commentCount === 0) {
      buttonLabel = "Add Comment";
    } else if (commentCount === 1) {
      buttonLabel = `1 Comment`;
    } else {
      buttonLabel = `${commentCount} Comments`;
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
            dispatch({ type: "toggle-comment", id });
          }}
        >
          {buttonLabel}
        </button>
      </div>
    );
  };

  const handleDelete = () => {
    API.deletePost(id).then((res) => {
      dispatch({ type: "delete-post", id });
    });
  };

  return (
    <div className="post">
      <p className="postInfo postAuthor">{author}</p>
      <p className="postInfo postDate">{getTodaysDate()}</p>

      <h4 className="post-title">{title}</h4>
      <p>{content}</p>

      <div className="comments-btns">

        {/** if user is not admin, do not show button */ }


        {!authData.user.admin ? null : <button className="delete-btn " onClick={() => handleDelete()}>
          Delete Post
        </button>}

        {getCommentButton()}
      </div>
      {addComment ? <CommentList comments={comments} id={id} commentCount={commentCount} /> : null}
      {addComment ? (
        <Comment
          id={id}
          commentCount={commentCount}
          state={state}
          dispatch={dispatch}
        />
      ) : null}
    </div>
  );
};

export default Post;
