import { FC, useCallback } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import {
  Categories,
  Sort,
  PizzaBlock,
  Sceleton,
  Pagination,
} from "../../Components/index";

import { setCategoryId, setCurrentPage } from "../../store/filter/slice";
import { filterSelector } from "../../store/filter/selectors";
import { pizzasSelector } from "../../store/pizzas/selectors";
import { fetchPizzas } from "../../store/pizzas/asyncActions";

import { useAppDispatch } from "../../store/store";

import styles from "./Home.module.scss";
const Home: FC = () => {
  const { categoryId, sort, currentPage, searchValue } =
    useSelector(filterSelector);
  const { items, status } = useSelector(pizzasSelector);
  const dispatch = useAppDispatch();

  const onChangeCategory = useCallback((id: number) => {
    dispatch(setCategoryId(id));
  }, []);
  const onChangePage = (number: number) => {
    dispatch(setCurrentPage(number));
  };
  const sortBy = sort.sort;
  const sortDirection = sort.sortDirection;

  useEffect(() => {
    (async () => {
      dispatch(
        fetchPizzas({
          currentPage,
          categoryId,
          sortBy,
          sortDirection,
          searchValue,
        })
      );
    })();

    window.scrollTo(0, 0);
  }, [categoryId, sort.sort, sort.sortDirection, searchValue, currentPage]);

  const pizzas = items.map((obj: any) => <PizzaBlock key={obj.id} {...obj} />);
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
          <Sort sortValue={sort} />
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
