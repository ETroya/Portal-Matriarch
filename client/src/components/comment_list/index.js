import IndividualComment from "../individualComment/index";
import "./style.css";
const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      {comments.map((comment) => {
        console.log(comment);
        return (
          <div className="comment-card">
            <IndividualComment comment={comment.content} id={comment.id} author={comment.author} />
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
