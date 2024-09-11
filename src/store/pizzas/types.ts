export type FetchPizzasArgs = {
  currentPage: number;
  categoryId: number;
  sortBy: string;
  sortDirection: string;
  searchValue: string;
};
export type PizzaItems = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  count: number;
};
export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface pizzasSliceState {
  items: PizzaItems[];
  status: Status;
}
