import React, { useState, useEffect } from "react";
import Feed from "../components/feed/index";
import NextDay from "../components/nextDay/index";

function User() {
  //setting state
  const [newComment, setNewComment] = useState(false);

  useEffect(() => {}, []);

  function addComment(event) {
    console.log(event.target.value);
    setNewComment(!newComment);
  }

  return (
    <div className="row">
      <div className="col-md-6">
        <Feed state={newComment} addComment={addComment} />
      </div>
      <div className="col-md-6">
        <NextDay />
      </div>
    </div>
  );
}

export default User;
