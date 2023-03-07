import axios from "axios";

const BASE_URL = "https://gladtube-api.onrender.com/api/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  headers: { "Access-Control-Allow-Origin": "*" },
});
