export type SortType = {
  name: string;
  sort: "rating" | "title" | "price";
  sortDirection: "desc" | "asc";
};

export interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  sort: SortType;
}
