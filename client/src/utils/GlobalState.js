import React, { createContext, useReducer, useContext } from "react";

const stateContext = createContext();
const { Provider } = stateContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "toggle-comment":
      return {
        posts: state.posts.map((post, id) =>
          id === action.id ? { ...post, addComment: !post.addComment } : post
        ),
      };
    case "create-array":
      return { posts: action.payload };
    default:
      return;
  }
};

const StateProvider = ({ value = false, ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    posts: [],
    addComment: false,
  });
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStateContext = () => {
  return useContext(stateContext);
};

export { StateProvider, useStateContext };
