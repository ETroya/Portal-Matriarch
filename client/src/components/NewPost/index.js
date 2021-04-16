import React, { useState } from "react";
import axios from "axios";
import { useStateContext } from "../../utils/GlobalState";

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

  return (
    <div>
      <form>
        <label htmlFor="postTitle">Enter Title</label>
        <input
          id="postTitle"
          name="postTitle"
          type="text"
          placeholder="Post title goes here!"
          onChange={handleChange}
        />
        <label htmlFor="postContent">Content</label>
        <input
          id="postContent"
          name="postContent"
          type="textarea"
          placeholder="Post content goes here!"
          onChange={handleChange}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: "add-new-post", payload: { title, content } });
          }}
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default NewPost;
