import React, { useState } from "react";
import axios from "axios";
import { useStateContext } from "../../utils/GlobalState";
import API from "../../utils/api";
import "./style.css";

const NewPost = () => {
  const [state, dispatch] = useStateContext();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "postTitle") {
      setTitle(value);
    } else {
      setContent(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    API.addNewPost({ title, content }).then((res) => {
      dispatch({ type: "add-new-post", payload: res.data });
    });
  };

  return (
    <div className="new-post">
      <div className="post-form">
        <div>
          <label htmlFor="postTitle">Enter Title</label>
        </div>
        <div>
          <input
            id="postTitle"
            name="postTitle"
            type="text"
            placeholder="Post title goes here!"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="postContent">Content</label>
        </div>
        <div>
          <textarea
            placeholder="Post content goes here!"
            id="postContent"
            name="postContent"
            onChange={handleChange}
          ></textarea>
        </div>
      </div>
      <button className="btn-circle btn-sm" onClick={(event) => handleSubmit(event)}>Post</button>
    </div>
  );
};

export default NewPost;
