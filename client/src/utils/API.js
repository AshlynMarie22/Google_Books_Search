import axios from "axios";

export default {
  getBooks: function () {
    return axios.get(
      "https://www.googleapis.com/apiName/apiVersion/resourcePath?parameters"
    );
  },
};