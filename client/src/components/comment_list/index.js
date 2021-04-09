import IndividualComment from "../individualComment/index";

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => {
        return <IndividualComment comment={comment} />;
      })}
    </div>
  );
};

export default CommentList;
