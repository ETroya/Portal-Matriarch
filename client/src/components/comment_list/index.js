//maps over all the comments to display as a list
import { useEffect } from "react";
import { useStateContext } from "../../utils/GlobalState";
//maps over all the comments to display as a list
import IndividualComment from "../individualComment/index";

import "./style.css";

const CommentList = ({ comments, id }) => {
  const [state, dispatch] = useStateContext();


  return (
    <div className="comment-list">
      {comments.map((comment) => {
        console.log(comment);
        return (
          <div className="comment-card">
            <IndividualComment
              content={comment.content}
              id={comment.id}
              author={comment.author}
              date={comment.createdOn}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
