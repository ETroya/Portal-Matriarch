import React, { useState } from "react";
import Feed from "../components/feed/index";
import NextDay from "../components/nextDay/index";

function User() {
  //setting state
  const [newComment, setNewComment] = useState(false);

  function addComment() {
    setNewComment(!newComment);
  }

  return (
    <div className="row">
      <div className="col-6">
        <Feed state={newComment} addComment={addComment} />
      </div>
      <div className="col-6">
        <NextDay />
      </div>
    </div>
  );
}

export default User;
