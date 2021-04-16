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
};
