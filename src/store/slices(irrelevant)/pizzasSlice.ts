import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

// type FetchPizzasArgs = {
//   currentPage: number;
//   categoryId: number;
//   sortBy: string;
//   sortDirection: string;
//   searchValue: string;
// };
// type PizzaItems = {
//   id: string;
//   title: string;
//   price: number;
//   imageUrl: string;
//   sizes: number[];
//   types: number[];
//   count: number;
// };
// export enum Status {
//   LOADING = "loading",
//   SUCCESS = "success",
//   ERROR = "error",
// }

// interface pizzasSliceState {
//   items: PizzaItems[];
//   status: Status;
// }

// export const fetchPizzas = createAsyncThunk<PizzaItems[], FetchPizzasArgs>(
//   "pizzas/fetchPizzasStatus",
//   async ({ currentPage, categoryId, sortBy, sortDirection, searchValue }) => {
//     const { data } = await axios.get<PizzaItems[]>(
//       `https://66cef231901aab2484204015.mockapi.io/items?page=${currentPage}&limit=4&${
//         categoryId > 0 ? `category=${categoryId}` : ""
//       }&sortBy=${sortBy}&order=${sortDirection}${
//         searchValue ? `&search=${searchValue}` : ""
//       }`
//     );
//     return data;
//   }
// );

// const initialState: pizzasSliceState = {
//   items: [],
//   status: Status.LOADING,
// };

// const pizzasSlice = createSlice({
//   name: "pizzas",
//   initialState,
//   reducers: {
//     setItems(state, action: PayloadAction<PizzaItems[]>) {
//       state.items = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchPizzas.pending, (state) => {
//       state.items = [];
//       state.status = Status.LOADING;
//     });
//     builder.addCase(
//       fetchPizzas.fulfilled,
//       (state, action: PayloadAction<PizzaItems[]>) => {
//         state.items = action.payload;
//         state.status = Status.SUCCESS;
//       }
//     );
//     builder.addCase(fetchPizzas.rejected, (state) => {
//       state.items = [];
//       state.status = Status.ERROR;
//     });
//   },
// });

// // export const pizzasSelector = (state: RootState) => state.pizzas;

// export const { setItems } = pizzasSlice.actions;

// export default pizzasSlice.reducer;
