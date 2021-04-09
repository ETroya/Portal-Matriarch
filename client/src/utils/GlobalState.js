import React, { createContext, useReducer, useContext } from "react";

const stateContext = createContext();
const { Provider } = stateContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "toggle-comment":
      return {
       ...state,  posts: state.posts.map((post, index) =>
          index === action.id ? { ...post, addComment: !post.addComment } : post
        ),
      };
    case "create-array":
     const new_state =  { ...state, posts: action.payload };
     console.log(new_state);
      return  new_state;
    // toggle-user
    case "toggle-user":
      return {
        //not operator
       ...state, addUser: !state.addUser,
      };
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
