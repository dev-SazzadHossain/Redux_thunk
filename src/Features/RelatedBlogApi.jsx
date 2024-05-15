import { AxiosInstance } from "../Utils/AxiosInstance";

//**!    ?tags_like=javascript&tags_like=react&id_ne=4&_limit=5

export const fetchRelatedFun = async (id, tags) => {
  let query =
    tags?.map((blog) => `tags_like=${blog}`).join("&") +
    `&id_ne=${id}&_limit=5`;
  const data = await AxiosInstance.get(`/blogs?${query}`);
  return data?.data;
};
