import React, { createContext, useReducer, useContext } from "react";
import API from "./api";

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
      // API.getAllPosts()
      //   .then((res) => {

      const new_state = { ...state, posts: action.payload };

      return new_state;
    // })
    // .catch((error) => {
    //   console.log(error);
    //   return [];
    // });

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
      return { ...state, posts: new_comments };
    case "toggle-new-post":
      return { ...state, createPost: !state.createPost };

    case "add-new-post":
      const new_post = {
        author: "author",
        title: action.payload.title,
        content: action.payload.content,
      };

      API.addNewPost(new_post).then((res) => {
        return {
          ...state,
          posts: [new_post].concat(state.posts),
          createPost: !state.createPost,
        };
      });
    case "open-directory":
      return { ...state, openDirectory: !state.openDirectory };
    default:
      return;
  }
};

const StateProvider = ({ value = false, ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    posts: [],
    createPost: false,
    addUser: false,
    // postTitle: "",
    // postContent: "",
    postCount: 3,
    openDirectory: false,
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
