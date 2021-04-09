import React, { createContext, useReducer, useContext } from "react";

const stateContext = createContext();
const { Provider } = stateContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "toggle-comment":
      return {
        ...state,
        posts: state.posts.map((post, index) =>
          index === action.id ? { ...post, addComment: !post.addComment } : post
        ),
      };
    case "create-array":
      const new_state = { ...state, posts: action.payload };
      console.log(new_state);
      return new_state;
    // toggle-user
    case "toggle-user":
      return {
        //not operator
        ...state,
        addUser: !state.addUser,
      };
    case "push-comment":
      const new_posts = state.posts.map((post) => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            comments: post.comments.concat(action.payload.comment),
            addComment: !post.addComment,
            commentCount: post.commentCount + 1,
          };
        }
        return post;
      });

      return { ...state, posts: new_posts };
    default:
      return;
  }
};

const StateProvider = ({ value = false, ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    posts: [],
    // addComment: false,
    //add user
    addUser: false,

  });
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStateContext = () => {
  return useContext(stateContext);
};

export { StateProvider, useStateContext };
