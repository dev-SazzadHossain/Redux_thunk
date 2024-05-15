import { configureStore } from "@reduxjs/toolkit";
import BlogSlice from "../Features/BlogSlice";
import SingleBlogSlice from "../Features/SingleBlogSlice";
import RelatedBlogSlice from "../Features/RelatedBlogSlice";
import SortSlice from "../Features/SortSlice";
import likeSlice from "../Features/likeSlice";
import savedSlice from "../Features/savedSlice";

export const store = configureStore({
  reducer: {
    blogs: BlogSlice,
    blog: SingleBlogSlice,
    relatedBlog: RelatedBlogSlice,
    filter: SortSlice,
    like: likeSlice,
    saved: savedSlice,
  },
});
