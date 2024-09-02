import React, { useContext } from "react";
import { useState, useEffect } from "react";

import Categories from "../../Components/Categories/Categories";
import Sort from "../../Components/Sort/Sort";
import PizzaBlock from "../../Components/PizzaBlock/PizzaBlock";
import Sceleton from "../../Components/PizzaBlock/Sceleton";
import Pagination from "../../Components/Pagination";
import { SearchContext } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setCurrentPage } from "../../store/slices/filterSlice";
import axios from "axios";

const Home = () => {
  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filter
  );
  const dispatch = useDispatch();

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [currentPage, setCurrentPage] = useState(1);

  const { searchValue } = useContext(SearchContext);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://66cef231901aab2484204015.mockapi.io/items?page=${currentPage}&limit=4&${
          categoryId > 0 ? `category=${categoryId}` : ""
        }&sortBy=${sort.sort}&order=${sort.sortDirection}${
          searchValue ? `&search=${searchValue}` : ""
        }`
      )
      .then((res) => {
        if (res.status == 404) {
          return [];
        }
        setItems(res.data);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoryId, sort.sort, sort.sortDirection, searchValue, currentPage]);

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
          <Sort />
        </div>
        <h2 className="content__title">All Pizzas</h2>
        <div className="content__items">{isLoading ? skeleton : pizzas}</div>
      </div>
      <Pagination
        // onChangePage={(number) => setCurrentPage(number)}
        onChangePage={onChangePage}
        currentPage={currentPage}
      />
    </>
  );
};

export default Home;
