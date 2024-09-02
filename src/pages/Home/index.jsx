import React, { useContext } from "react";
import { useState, useEffect } from "react";

import Categories from "../../Components/Categories/Categories";
import Sort from "../../Components/Sort/Sort";
import PizzaBlock from "../../Components/PizzaBlock/PizzaBlock";
import Sceleton from "../../Components/PizzaBlock/Sceleton";
import Pagination from "../../Components/Pagination";
import { SearchContext } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../../store/slices/filterSlice";

const Home = () => {
  const categoryId = useSelector((state) => state.filter.categoryId);

  const dispatch = useDispatch();

  console.log(categoryId);

  const onChangeCategory = (id) => {
    // console.log(id);
    dispatch(setCategoryId(id));
  };

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  // const [sortType, setSortType] = useState({
  //   name: "popularity",
  //   sort: "rating",
  // });
  const sortType = useSelector((state) => state.filter.sort);
  // const sortDirection = useSelector((state) => state.filter.sortDirection);

  // const [sortDirection, setSortDirection] = useState("desc");

  const { searchValue } = useContext(SearchContext);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://66cef231901aab2484204015.mockapi.io/items?page=${currentPage}&limit=4&${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortType.sort}&order=${sortType.sortDirection}${
        searchValue ? `&search=${searchValue}` : ""
      }`
    )
      .then((res) => {
        if (res.status == 404) {
          return [];
        }
        return res.json();
      })
      .then((body) => {
        setItems(body);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [
    categoryId,
    sortType.sort,
    sortType.sortDirection,
    searchValue,
    currentPage,
  ]);

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeleton = [...new Array(6)].map((_, index) => (
    <Sceleton key={index} />
  ));
  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories
            categoryId={categoryId}
            onClickCategory={onChangeCategory}
          />
          <Sort
          // sortDirection={sortDirection}
          // changeSortDirection={setSortDirection}
          />
        </div>
        <h2 className="content__title">All Pizzas</h2>
        <div className="content__items">{isLoading ? skeleton : pizzas}</div>
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  );
};

export default Home;
