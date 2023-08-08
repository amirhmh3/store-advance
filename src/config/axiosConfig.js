import axios from "axios";
import { url } from "./../constants/base";

export const axiosAuth = axios.create({
  baseURL: url,
  timeout: 8000,
  headers: {
    Accept: "application/json",
    token: "",
  },
});

export const axiosNotAuth = axios.create({
  baseURL: url,
  timeout: 8000,
  headers: {
    Accept: "application/json"
  },
});
