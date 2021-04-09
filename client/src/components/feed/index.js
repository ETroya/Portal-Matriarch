import React, { useState, useEffect } from "react";
import { useStateContext } from "../../utils/GlobalState";
import Post from "../post/index";
import "./style.css";

const Feed = () => {
  const [state, dispatch] = useStateContext();

  const postArray = [
    {
      id: 1023,
      author: "Nelson Mandela",
      date: "3 days ago",
      content:
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      addComment: false,
      comments: [],
      commentCount: 0,
      commentList: false,
    },
    {
      id: 1,
      author: "Walt Disney",
      date: "4 days ago",
      content: "The way to get started is to quit talking and begin doing.",
      addComment: false,
      comments: [],
      commentCount: 0,
      commentList: false,
    },
    {
      id: 2,
      author: "Steve Jobs",
      date: "5 days ago",
      content:
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
      addComment: false,
      comments: [],
      commentCount: 0,
      commentList: false,
    },
    {
      id: 3,
      author: "Eleanor Roosevelt",
      date: "6 days ago",
      content:
        "If life were predictable it would cease to be life, and be without flavor.",
      addComment: false,
      comments: [],
      commentCount: 0,
      commentList: false,
    },
    {
      id: 4,
      author: "Oprah Winfrey",
      date: "7 days ago",
      content:
        "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
      addComment: false,
      comments: [],
      commentCount: 0,
      commentList: false,
    },
    {
      id: 5,
      author: "James Cameron",
      date: "8 days ago",
      content:
        "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
      addComment: false,
      comments: [],
      commentCount: 0,
      commentList: false,
    },
    {
      id: 6,
      author: "John Lennon",
      date: "9 days ago",
      content: "Life is what happens when you're busy making other plans.",
      addComment: false,
      comments: [],
      commentCount: 0,
      commentList: false,
    },
  ];

  useEffect(() => {
    dispatch({ type: "create-array", payload: postArray });
  }, []);

  return (
    <div className="container feed">
      {state.posts.map((post) => {
        return (
          <Post
            state={state}
            dispatch={dispatch}
            id={post.id}
            key={post.id}
            author={post.author}
            date={post.date}
            content={post.content}
            addComment={post.addComment}
            commentCount={post.commentCount}
            commentList={post.commentList}
          />
        );
      })}
    </div>
  );
};

export default Feed;
