//one person comment
import React, { useContext } from "react";
import "./style.css";
import {
  useStateContext,
  authContext,
  authData,
} from "../../utils/GlobalState";
import API from "../../utils/api";

const IndividualComment = ({
  allComments,
  content,
  commentID,
  postID,
  author,
  authorUserName,
  authorID,
  date,
  commentCount,
}) => {

  const [state, dispatch] = useStateContext();
  const { authData } = useContext(authContext);

console.log(`authorID: ${authorID}`);

  const getTodaysDate = () => {
    const today = new Date();
    const commentDate = new Date(date);

    if (commentDate.getDate() === today.getDate()) {
      if (commentDate.getHours() === today.getHours()) {
        if (commentDate.getMinutes() === today.getMinutes()) {
          if (today.getSeconds() - commentDate.getSeconds() === 1) {
            return `${
              today.getSeconds() - commentDate.getSeconds()
            } seconds ago`;
          }
          return `${today.getSeconds() - commentDate.getSeconds()} seconds ago`;
        }
        if (today.getMinutes() - commentDate.getMinutes() === 1) {
          return `${today.getMinutes() - commentDate.getMinutes()} Minute ago`;
        }
        return `${today.getMinutes() - commentDate.getMinutes()} Minutes ago`;
      }
      if (today.getHours() - commentDate.getHours() === 1) {
        return `${today.getHours() - commentDate.getHours()} Hour ago`;
      }
      return `${today.getHours() - commentDate.getHours()} Hours ago`;
    }
    if (today.getDate() - commentDate.getDate() === 1) {
      return `${today.getDate() - commentDate.getDate()} Day ago`;
    }
    return `${today.getDate() - commentDate.getDate()} Days ago`;
  };

  const handleDelete = () => {
    API.deleteComment(postID, commentID, commentCount).then((res) => {
      dispatch({ type: "delete-comment", postID, commentID, allComments });
    });
  };

  const getDeleteCommentButton = () => {

    if(authData.user.admin){
      return <button className="deleteCommentButton" onClick={() => handleDelete()}>Delete comment</button>;
    } else if(authData.user._id === authorID ){
      return <button className="deleteCommentButton" onClick={() => handleDelete()}>Delete comment</button>;
    }
    return null;
  };

  return (
    <div className="commentDiv">
      <div className="comment-header">
        <p className="comment-author">
          <i>{author}</i> {authorUserName}
        </p>

        <p className="comment-date">
          <i>{getTodaysDate()}</i>
        </p>
      </div>
      <p>{content}</p>
      {/* <button
        className="like-button"
        onClick={() => dispatch({ type: "add-like", id })}
      >
        Like
      </button> */}
      {/* {comment.likes} Likes */}
      {getDeleteCommentButton()}
      <hr />
    </div>
  );
};

export default IndividualComment;
