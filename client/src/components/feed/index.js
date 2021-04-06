import React from "react";
import Post from "../post/index";
import "./style.css";
const Feed = ({ state, addComment }) => {
  const postArray = [
    {
      id: "1",
      author: "Nelson Mandela",
      date: "3 days ago",
      content:
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    },
    {
      id: "2",
      author: "Walt Disney",
      date: "4 days ago",
      content: "The way to get started is to quit talking and begin doing.",
    },
    {
      id: "3",
      author: "Steve Jobs",
      date: "5 days ago",
      content:
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    },
    {
      id: "4",
      author: "Eleanor Roosevelt",
      date: "6 days ago",
      content:
        "If life were predictable it would cease to be life, and be without flavor.",
    },
    {
      id: "5",
      author: "Oprah Winfrey",
      date: "7 days ago",
      content:
        "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    },
    {
      id: "6",
      author: "James Cameron",
      date: "8 days ago",
      content:
        "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    },
    {
      id: "7",
      author: "John Lennon",
      date: "9 days ago",
      content: "Life is what happens when you're busy making other plans.",
    },
  ];
  return (
    <div className="container feed">
      {postArray.map((post) => {
        return (
          <Post
            state={state}
            id={post.id}
            addComment={addComment}
            key={post.id}
            author={post.author}
            date={post.date}
            content={post.content}
          />
        );
      })}
    </div>
  );
};

export default Feed;
