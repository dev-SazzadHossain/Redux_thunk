import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBlogFun } from "./SingleBlogApi";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  blog: {},
};

// ***** async thunk *****

export const fetchBlog = createAsyncThunk("fetch/blog", async (id) => {
  const result = await fetchBlogFun(id);
  return result;
});

const singleBlogSlice = createSlice({
  name: "singleBlog",
  initialState,
  reducers: {},
  // ********** use extraReducers load data*************
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.blog = action.payload;
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.blog = {};
        state.isError = true;
        state.error = action?.error?.message;
      });
  },
});

export default singleBlogSlice.reducer;
