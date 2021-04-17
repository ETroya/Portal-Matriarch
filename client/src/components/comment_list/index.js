//maps over all the comments to display as a list 
import IndividualComment from "../individualComment/index";
import "./style.css";

const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      {comments.map((comment) => {
        return (
          <div className="comment-card">
            <IndividualComment comment={comment} id={comment.id} />
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
