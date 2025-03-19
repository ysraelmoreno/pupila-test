import axios, { AxiosRequestConfig } from "axios";

export const fetcher = (url: string, options: AxiosRequestConfig) =>
  axios.get(url, options);
