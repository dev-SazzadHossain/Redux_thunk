import { AxiosInstance } from "../Utils/AxiosInstance";

export const fetchBlogFun = async (id) => {
  const data = await AxiosInstance.get(`/blogs/${id}`);
  return data?.data;
};
