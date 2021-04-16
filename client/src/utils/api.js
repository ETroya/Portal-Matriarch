import axios from "axios";

export default {
  getEmployee: function() {
    return axios.get("/api/users");
  }
};

