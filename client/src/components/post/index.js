import React from "react";
import Comment from "../comment/index";

const Post = ({ state, addComment }) => {
  return (
    <div className="post">
      <h1>Title to a post</h1>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
      <button onClick={addComment}>Comment</button>
      {state ? <Comment /> : null}
    </div>
  );
};

export default Post;
