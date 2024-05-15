import { AxiosInstance } from "../Utils/AxiosInstance";

export const fetchSavedFun = async (id, saved) => {
  const data = await AxiosInstance.patch(`/blogs/${id}`, { isSaved: saved });
  return data?.data;
};
