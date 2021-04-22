//one person comment
import React from "react";
import "./style.css";
import { useStateContext } from "../../utils/GlobalState";

const IndividualComment = ({ content, id, author, date }) => {
  const [state, dispatch] = useStateContext();

  const getTodaysDate = () => {
    const today = new Date();
    const commentDate = new Date(date);

      if(commentDate.getDate() === today.getDate()){
        if(commentDate.getHours() === today.getHours()){
          if(commentDate.getMinutes() === today.getMinutes()){
            if((today.getSeconds() - commentDate.getSeconds()) === 1){
              return `${today.getSeconds() - commentDate.getSeconds()} seconds ago`;
            };
            return `${today.getSeconds() - commentDate.getSeconds()} seconds ago`; 
          };
          if((today.getMinutes() - commentDate.getMinutes()) === 1){
            return `${today.getMinutes() - commentDate.getMinutes()} Minute ago`;
          };
          return `${today.getMinutes() - commentDate.getMinutes()} Minutes ago`;
        };
        if((today.getHours() - commentDate.getHours()) === 1){
          return `${today.getHours() - commentDate.getHours()} Hour ago`;
        };
        return `${today.getHours() - commentDate.getHours()} Hours ago`;
      };
      if((today.getDate() - commentDate.getDate()) === 1){
        return `${today.getDate() - commentDate.getDate()} Day ago`;
      }
      return `${today.getDate() - commentDate.getDate()} Days ago`;
  };

  return (
    <div className="commentDiv">
      <div className="comment-header">
        <p className="comment-author">
          <i>{author}</i>
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
    </div>
  );
};

export default IndividualComment;
