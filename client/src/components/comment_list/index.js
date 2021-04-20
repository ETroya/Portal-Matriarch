<<<<<<< HEAD
import { useEffect } from "react";
import { useStateContext } from "../../utils/GlobalState";
=======
//maps over all the comments to display as a list 
>>>>>>> 7d0275594c8e1ecb7c41d38ebe4eb0bad6186c9c
import IndividualComment from "../individualComment/index";

import "./style.css";

<<<<<<< HEAD

const CommentList = ({ comments, id }) => {
  const [state, dispatch] = useStateContext();

  useEffect(() => {
    
  }, [comments])
=======
const CommentList = ({ comments }) => {
>>>>>>> 7d0275594c8e1ecb7c41d38ebe4eb0bad6186c9c

  return (
    <div className="comment-list">
      {comments.map((comment) => {

        return (
          <div className="comment-card">
            <IndividualComment content={comment.content} id={comment.id} author={comment.author} />
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
