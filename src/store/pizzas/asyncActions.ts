import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PizzaItems, FetchPizzasArgs } from "./types";

export const fetchPizzas = createAsyncThunk<PizzaItems[], FetchPizzasArgs>(
  "pizzas/fetchPizzasStatus",
  async ({ currentPage, categoryId, sortBy, sortDirection, searchValue }) => {
    const { data } = await axios.get<PizzaItems[]>(
      `https://66cef231901aab2484204015.mockapi.io/items?page=${currentPage}&limit=4&${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortBy}&order=${sortDirection}${
        searchValue ? `&search=${searchValue}` : ""
      }`
    );
    return data;
  }
);
