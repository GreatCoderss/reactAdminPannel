import { request as https } from "../utils/https";
const baseUrl = `https://dummyapi.io/data/api`;

//getting posts
// https://dummyapi.io/data/api/post?limit=10

export const GetPosts = ({ limit }) => {
  return https.get(`${baseUrl}/post?limit=${limit}`);
};

export const GetUsers = ({ limit }) => {
  return https.get(`${baseUrl}/user?limit=${limit}`);
};
