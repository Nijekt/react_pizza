import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzasStatus",
  async ({ currentPage, categoryId, sort, searchValue }, thunkAPI) => {
    const res = await axios.get(
      `https://66cef231901aab2484204015.mockapi.io/items?page=${currentPage}&limit=4&${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sort.sort}&order=${sort.sortDirection}${
        searchValue ? `&search=${searchValue}` : ""
      }`
    );
    return res.data;
    // setItems(res.data);
  }
);

const initialState = {
  items: [],
  status: "loading",
};

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.items = [];
      state.status = "loading";
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.items = [];
      state.status = "error";
    });
  },
});

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
