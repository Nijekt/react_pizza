// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "../store";

// export type SortType = {
//   name: string;
//   sort: "rating" | "title" | "price";
//   sortDirection: "desc" | "asc";
// };

// interface FilterSliceState {
//   searchValue: string;
//   categoryId: number;
//   currentPage: number;
//   sort: SortType;
// }

// const initialState: FilterSliceState = {
//   searchValue: "",
//   categoryId: 0,
//   currentPage: 1,
//   sort: {
//     name: "popularity",
//     sort: "rating",
//     sortDirection: "desc",
//   },
// };

// export const filterSlice = createSlice({
//   name: "filter",
//   initialState,
//   reducers: {
//     setCategoryId(state, action: PayloadAction<number>) {
//       state.categoryId = action.payload;
//     },
//     setSort(state, action: PayloadAction<SortType>) {
//       state.sort = action.payload;
//     },
//     setSortDirection(state, action: PayloadAction<"desc" | "asc">) {
//       state.sort.sortDirection = action.payload;
//     },
//     setCurrentPage(state, action: PayloadAction<number>) {
//       state.currentPage = action.payload;
//     },
//     setSearchValue(state, action: PayloadAction<string>) {
//       state.searchValue = action.payload;
//     },
//   },
// });

// export const filterSelector = (state: RootState) => state.filter;

// export const sortSelector = (state: RootState) => state.filter.sort;

// export const {
//   setCategoryId,
//   setSort,
//   setSortDirection,
//   setCurrentPage,
//   setSearchValue,
// } = filterSlice.actions;

// export default filterSlice.reducer;
