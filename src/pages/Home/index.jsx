import React, { useContext } from "react";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

import Categories from "../../Components/Categories/Categories";
import Sort from "../../Components/Sort/Sort";
import PizzaBlock from "../../Components/PizzaBlock/PizzaBlock";
import Sceleton from "../../Components/PizzaBlock/Sceleton";
import Pagination from "../../Components/Pagination";
import { SearchContext } from "../../App";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState({
    name: "popularity",
    sort: "rating",
  });
  const [sortDirection, setSortDirection] = useState("desc");

  const { searchValue } = useContext(SearchContext);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://66cef231901aab2484204015.mockapi.io/items?page=${currentPage}&limit=4&${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortType.sort}&order=${sortDirection}${
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
  }, [categoryId, sortType, sortDirection, searchValue, currentPage]);
  // const pizzas = items
  //   .filter((obj) => {
  //     if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
  //       return true;
  //     }
  //     return false;
  //   })
  //   .map((obj) => <PizzaBlock key={obj.id} {...obj} />);
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
            onClickCategory={(index) => setCategoryId(index)}
          />
          <Sort
            sortType={sortType}
            onChangeSort={(index) => setSortType(index)}
            sortDirection={sortDirection}
            changeSortDirection={setSortDirection}
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
