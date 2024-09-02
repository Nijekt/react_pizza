import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    name: "popularity",
    sort: "rating",
    sortDirection: "desc",
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setSortDirection(state, action) {
      state.sort.sortDirection = action.payload;
    },
  },
});

export const { setCategoryId, setSort, setSortDirection } = filterSlice.actions;

export default filterSlice.reducer;
