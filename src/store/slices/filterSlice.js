import { createSlice } from "@reduxjs/toolkit";
import { sortList } from "../../Components/Sort/Sort";

const initialState = {
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: "popularity",
    sort: "rating", // Поле сортировки, используемое в запросах
    sortDirection: "desc", // Направление сортировки
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
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.currentPage = Number(action.payload.currentPage);
      state.sort.sort = action.payload.sort;
      const sortItem = sortList.find((obj) => obj.sort === action.payload.sort);
      if (sortItem) {
        state.sort.name = sortItem.name;
      }
      state.sort.sortDirection = action.payload.sortDirection || "desc";
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const {
  setCategoryId,
  setSort,
  setSortDirection,
  setCurrentPage,
  setFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
