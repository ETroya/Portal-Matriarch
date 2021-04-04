import React from "react";
import Post from "../post/index";
import "./style.css";
const Feed = ({ state, addComment }) => {
  return (
    <div className="container feed">
      <Post state={state} addComment={addComment} />
      <Post state={state} addComment={addComment} />
      <Post state={state} addComment={addComment} />
      <Post state={state} addComment={addComment} />
    </div>
  );
};

export default Feed;
