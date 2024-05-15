import { AxiosInstance } from "../Utils/AxiosInstance";

export const fetchLikeFun = async (id, like) => {
  const data = await AxiosInstance.patch(`/blogs/${id}`, { likes: like });
  return data?.data;
};
