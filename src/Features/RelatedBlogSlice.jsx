import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBlogsFun } from "./BlogsApi";
import { fetchRelatedFun } from "./RelatedBlogApi";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  relatedBlog: [],
};

// **********fetch blogs use asyncThunk*************
export const fetchRelatedBlogs = createAsyncThunk(
  "fetch/relatedBlogs",
  async ({ id, tags }) => {
    const result = await fetchRelatedFun(id, tags);
    return result;
  }
);

const relatedSlice = createSlice({
  name: "relatedBlogs",
  initialState,
  reducers: {},
  // ********** use extraReducers load data*************
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedBlogs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.relatedBlog = action.payload;
      })
      .addCase(fetchRelatedBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.relatedBlog = [];
        state.isError = true;
        state.error = action?.error?.message;
      });
  },
});

export default relatedSlice.reducer;
