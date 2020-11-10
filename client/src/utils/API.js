import axios from "axios";

export default {
  getBook: function () {
    return axios.get(
      `https://www.googleapis.com/apiName/apiVersion/resourcePath?parameters`
    );
  }
};