import React, { createContext, useReducer, useContext } from "react";

const stateContext = createContext();
const { Provider } = stateContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "toggle-comment":
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.id) {
            return { ...post, addComment: !post.addComment };
          }
          if (post.addComment === true && post.id != action.id) {
            return { ...post, addComment: !post.addComment };
          }
          return post;
        }),
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

    case "toggle-comment-list":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.id
            ? { ...post, hasComments: !post.hasComments }
            : post
        ),
      };
    case "load-more-post":
      return {
        ...state,
        postCount: state.postCount + 2,
      };
    case "add-like":
      const new_comments = state.posts.map((post) => {
        return {
          ...post,
          comments: post.comments.map((comment) => {
            if (comment.id === action.id) {
              return {
                ...comment,
                likes: comment.likes + 1,
              };
            }
            return comment;
          }),
        };
      });

      console.log(new_comments);
      return { ...state, posts: new_comments };

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
    postCount: 3,
  });
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStateContext = () => {
  return useContext(stateContext);
};

const authContext = React.createContext({
  authData: {
    isAuthenticated: null,
    loading: true,
    user: null,
  },
  setAuth: () => {},
});

export { StateProvider, useStateContext, authContext };
