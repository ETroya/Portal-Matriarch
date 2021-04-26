//maps over all the comments to display as a list
import { useEffect } from "react";
import { useStateContext } from "../../utils/GlobalState";
//maps over all the comments to display as a list
import IndividualComment from "../individualComment/index";

import "./style.css";

const CommentList = ({ comments, id, commentCount }) => {
  const [state, dispatch] = useStateContext();


  return (
    <div className="comment-list">
      {comments.map((comment) => {
        return (
          <div className="comment-card" key={comment._id}>
            <IndividualComment
            allComments={comments}
              content={comment.content}
              postID={id}
              commentID={comment._id}
              author={comment.author}
              authorUserName={comment.authorUserName}
              authorID={comment.authorID}
              date={comment.createdOn}
              commentCount={commentCount}
            />
            
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
