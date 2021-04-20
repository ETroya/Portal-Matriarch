import React, { useState, useEffect } from "react";
import { useStateContext } from "../../utils/GlobalState";
import Post from "../post/index";
import "./style.css";
import NewPost from "../NewPost";
import API from "../../utils/api";

const Feed = () => {
  const [state, dispatch] = useStateContext();

  useEffect(() => {
    API.getAllPosts()
      .then((res) => {
        const sortedFeed = res.data.sort(
          (a, b) => new Date(b.createdOn) - new Date(a.createdOn)
        );
        dispatch({ type: "create-array", payload: sortedFeed });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [state.posts]);


  return (
    <div className="container feed">
      {state.createPost ? <NewPost /> : null}
      {state.posts.slice(0, state.postCount).map((post) => {
        return (
          <div key={post._id}>
            <Post
            key={post._id}
              state={state}
              dispatch={dispatch}
              id={post._id}
              author={post.author}
              date={post.date}
              title={post.title}
              content={post.content}
              addComment={post.addComment}
              commentCount={post.commentCount}
              comments={post.comments}
            />
            <hr />
          </div>
        );
      })}
      <div className="load-more">
        <button
          className="loadButton"
          onClick={() => {
            dispatch({ type: "load-more-post" });
          }}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Feed;
