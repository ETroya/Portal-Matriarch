import axios from "axios";

export default {
  getEmployee: function () {
    return axios.get("https://randomuser.me/api/");
  },

  addNewPost: (data) => {
    return axios.post("/api/messages/newpost", data);
  },
  getAllPosts: () => {
    return axios.get("/api/messages/getposts");
  },
};
