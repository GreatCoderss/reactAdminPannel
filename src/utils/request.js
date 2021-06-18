import axios from "axios";

axios.interceptors.request.use((config) => {
  config.headers["app-id"] = "60ccbd06b9a9e7bfe8846ebe";
  return config;
});

export const request = {
  get: axios.get,
};
