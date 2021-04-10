import IndividualComment from "../individualComment/index";
import "./style.css";
const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      {comments.map((comment) => {
        return (
          <div className="comment-card">
            <p className="comment-author">
              <i>comment author</i>
            </p>
            <IndividualComment comment={comment} />
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
