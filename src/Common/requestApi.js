import { request as https } from "../utils/https";
const baseUrl = `https://dummyapi.io/data/api`;

export const GetPosts = ({ limit }) => {
  return https.get(`${baseUrl}/post?limit=${limit}`);
};

export const GetUsers = ({ limit }) => {
  return https.get(`${baseUrl}/user?limit=${limit}`);
};
