import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

export const shortenUrlApi = (originalUrl) => {
  return axios.post(`${BASE_URL}/shorten`, {
    url: originalUrl,
  });
};