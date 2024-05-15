import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBlogsFun } from "./BlogsApi";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  blogs: [],
};

// **********fetch blogs use asyncThunk*************
export const fetchBlogs = createAsyncThunk("fetch/blogs", async () => {
  const result = await fetchBlogsFun();
  return result;
});

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  // ********** use extraReducers load data*************
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.blogs = [];
        state.isError = true;
        state.error = action?.error?.message;
      });
  },
});

export default blogSlice.reducer;
