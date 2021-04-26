import axios from "axios";

export default {
  getEmployee: function () {
    return axios.get("/api/users");
  },
  addNewPost: (data) => {
    return axios.post("/api/messages/newpost", data);
  },
  getAllPosts: () => {
    return axios.get("/api/messages/getposts");
  },
  addComment: (comment, id, commentCount) => {
    return axios.put("/api/messages/comment", { comment, id, commentCount });
  },
  deletePost: ( id ) => {
    return axios.delete("/api/messages/deletePost", {data: {id: id}});
  },
  updateProfile: (data) => {
    return axios.put("/api/users/profile", data);
  },
  getUser: () => {
    return axios.get("/api/users/getUser");
  },
  isAdmin: () => {
    return axios.get("/api/users/admin");
  },
  logout: ()=> {
    return axios.post("/api/users/logout");
  },
  deleteComment: (commentID, postID, commentCount) => {
    return axios.put("/api/messages/deleteComment", { commentID, postID, commentCount });
  }
};
