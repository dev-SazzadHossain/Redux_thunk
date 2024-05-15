import { AxiosInstance } from "../Utils/AxiosInstance";

export const fetchBlogsFun = async () => {
  const data = await AxiosInstance.get("/blogs");
  return data?.data;
};
