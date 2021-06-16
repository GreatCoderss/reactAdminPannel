import axios from "axios";

axios.interceptors.request.use((config) => {
  config.headers["app-id"] = "60c890595f7020790696f8f3";
  return config;
});

export const request = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
