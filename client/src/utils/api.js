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
  addComment: (comment, id) => {
    return axios.put("/api/messages/comment", { comment, id });
  },
};
