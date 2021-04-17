//maps over all the comments to display as a list 
import IndividualComment from "../individualComment/index";
import "./style.css";

const CommentList = ({ comments }) => {

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
