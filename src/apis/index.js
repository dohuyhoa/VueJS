import axios from "axios";
import config from "../configs"
const axiosAPI = axios.create({
  baseURL: config.baseURL,
});
axiosAPI.interceptors.request.use(
  function (config) {
    // config.headers.tokenByClass =config.tokenByClass
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
)
axiosAPI.interceptors.response.use(
  function (response) {
    // return response.data;
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
)
export default  axiosAPI