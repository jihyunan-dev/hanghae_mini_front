import axios from "axios";

const accessToken = document.cookie.split("=")[1];
console.log(accessToken);

export const api = axios.create({
  baseURL: "http://52.78.47.49/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
    "X-AUTH-TOKEN": `${accessToken}`,
  },
});

export const api_token = axios.create({
  baseURL: "http://52.78.47.49/token",
});
