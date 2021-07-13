import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const api_token = axios.create({
  baseURL: "http://localhost:3001/token",
  headers: { authorization: "Bearer kpXVCJ9.eygd4MiL....." },
});
