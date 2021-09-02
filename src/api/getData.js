import axios from "axios";
import { API_URL } from "./constants";

export const getData = () => {
  const endpoint = "/get";

  axios
    .get(`${API_URL}${endpoint}`)
    .then((response) => {
      const data = response.data.data;
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};
