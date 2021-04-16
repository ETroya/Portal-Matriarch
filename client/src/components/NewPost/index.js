import React, { useState } from "react";
import axios from "axios";
import { useStateContext } from "../../utils/GlobalState";
import API from "../../utils/api";

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
      console.log(res.data);
      dispatch({ type: "add-new-post", payload: res.data });
    });
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
        <button onClick={(event) => handleSubmit(event)}>Post</button>
      </form>
    </div>
  );
};

export default NewPost;
