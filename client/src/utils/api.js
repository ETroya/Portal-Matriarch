import axios from "axios";

export default {
  search: function() {
    return axios.get('https://randomuser.me/api/?nat=ca&results=20');
  }
};