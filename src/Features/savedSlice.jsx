import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBlogFun } from "./SingleBlogApi";
import { fetchLikeFun } from "./likeApi";
import { fetchSavedFun } from "./savedApi";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  success: false,
  id: null,
  saved: false,
};

// ***** async thunk *****

export const fetchSaved = createAsyncThunk(
  "fetch/saved",
  async ({ id, saved }) => {
    const result = await fetchSavedFun(id, saved);
    return result;
  }
);

const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    savedFilter: (state, action) => {
      state.id = action.payload?.id;
      state.saved = action.payload?.saved;
    },
  },
  // ********** use extraReducers load data*************
  extraReducers: (builder) => {
    builder
      .addCase(fetchSaved.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchSaved.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.success = true;
      })
      .addCase(fetchSaved.rejected, (state, action) => {
        state.isLoading = false;
        state.success = false;
        state.isError = true;
        state.error = action?.error?.message;
      });
  },
});

export default savedSlice.reducer;

export const { savedFilter } = savedSlice.actions;
