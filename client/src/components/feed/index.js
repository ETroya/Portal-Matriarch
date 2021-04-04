import React from "react";
import Post from "../post/index";

const Feed = ({ state, addComment }) => {
  return (
    <div className="container">
      <Post state={state} addComment={addComment} />
      <Post state={state} addComment={addComment} />
      <Post state={state} addComment={addComment} />
      <Post state={state} addComment={addComment} />
    </div>
  );
};

export default Feed;
