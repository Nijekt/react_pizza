import React from "react";
import { useState, useEffect } from "react";

import Categories from "../../Components/Categories/Categories";
import Sort from "../../Components/Sort/Sort";
import PizzaBlock from "../../Components/PizzaBlock/PizzaBlock";
import Sceleton from "../../Components/PizzaBlock/Sceleton";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "popularity",
    sort: "rating",
  });
  const [sortDirection, setSortDirection] = useState("desc");

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://66cef231901aab2484204015.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortType.sort}&order=${sortDirection}`
    )
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        setItems(body);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoryId, sortType, sortDirection]);
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
        <div className="content__items">
          {isLoading
            ? [...new Array(6)].map((_, index) => <Sceleton key={index} />)
            : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
        </div>
      </div>
    </>
  );
};

export default Home;
