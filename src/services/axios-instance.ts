import axios, { type AxiosInstance } from "axios";
import { axiosInit } from "./axios-init";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_EGO_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const token = localStorage.getItem("token") as string;

if (token) {
  axiosInit(token)
}