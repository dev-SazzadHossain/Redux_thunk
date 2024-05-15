import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: "",
  isSaved: "all",
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    sortFun: (state, action) => {
      state.sort = action.payload;
    },
    isSaveFun: (state, action) => {
      state.isSaved = action.payload;
    },
  },
});

export default sortSlice.reducer;
export const { isSaveFun, sortFun } = sortSlice.actions;
