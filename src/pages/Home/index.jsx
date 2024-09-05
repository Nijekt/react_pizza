import React from "react";
import { useState, useEffect } from "react";
import Categories from "../../Components/Categories/Categories";
import Sort from "../../Components/Sort/Sort";
import PizzaBlock from "../../Components/PizzaBlock/PizzaBlock";
import Sceleton from "../../Components/PizzaBlock/Sceleton";
import Pagination from "../../Components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setCurrentPage } from "../../store/slices/filterSlice";
import { fetchPizzas, setItems } from "../../store/slices/pizzasSlice";
import axios from "axios";
import styles from "./Home.module.scss";

const Home = () => {
  const { categoryId, sort, currentPage, searchValue } = useSelector(
    (state) => state.filter
  );
  const { items, status } = useSelector((state) => state.pizzas);
  const dispatch = useDispatch();

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  useEffect(() => {
    (async () => {
      // setIsLoading(true);

      // try {
      //   console.log(5555);
      // const res = await axios.get(
      //   `https://66cef231901aab2484204015.mockapi.io/items?page=${currentPage}&limit=4&${
      //     categoryId > 0 ? `category=${categoryId}` : ""
      //   }&sortBy=${sort.sort}&order=${sort.sortDirection}${
      //     searchValue ? `&search=${searchValue}` : ""
      //   }`
      // );
      // dispatch(setItems(res.data));

      dispatch(
        fetchPizzas({
          currentPage,
          categoryId,
          sort,
          searchValue,
        })
      );
      // } catch (error) {
      //   dispatch(setItems([]));

      //   console.log("ERROR", error);
      // }
      // finally {
      //   setIsLoading(false);
      // }
    })();

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
        {status == "error" ? (
          <div className={styles.error}>
            <h2>OOOPS SOMETHING WENT WRONG</h2>
            <p>
              There was a system failure.Try refreshing the page or come back a
              little later
            </p>
          </div>
        ) : (
          <div className="content__items">
            {status == "loading" ? skeleton : pizzas}
          </div>
        )}
      </div>
      <Pagination onChangePage={onChangePage} currentPage={currentPage} />
    </>
  );
};

export default Home;
