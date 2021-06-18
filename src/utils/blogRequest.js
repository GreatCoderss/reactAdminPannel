import { request as https } from "./request";

export const GetPost = ({ limit }) => {
  return https.get(`https://dummyapi.io/data/api/post?limit=${limit}`);
};

export const GetUser = ({ limit }) => {
  return https.get(`https://dummyapi.io/data/api/user?limit=${limit}`);
};
