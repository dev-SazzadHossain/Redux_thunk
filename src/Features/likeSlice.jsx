import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBlogFun } from "./SingleBlogApi";
import { fetchLikeFun } from "./likeApi";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  message: "",
};

// ***** async thunk *****

export const fetchLike = createAsyncThunk(
  "fetch/like",
  async ({ id, like }) => {
    const result = await fetchLikeFun(id, like);
    return result;
  }
);

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {},
  // ********** use extraReducers load data*************
  extraReducers: (builder) => {
    builder
      .addCase(fetchLike.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchLike.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.message = "Updated To Like";
      })
      .addCase(fetchLike.rejected, (state, action) => {
        state.isLoading = false;
        state.message = "";
        state.isError = true;
        state.error = action?.error?.message;
      });
  },
});

export default likeSlice.reducer;
