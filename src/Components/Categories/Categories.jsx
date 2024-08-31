import { useState } from "react";

const Categories = ({ categoryId, onClickCategory }) => {
  const categories = ["All", "Meats", "Vegeterian", "Grill", "Spicy", "Closed"];

  // const onClickCategory = (index) => {
  //   setActiveIndex(index);
  // };

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={categoryId === index && "active"}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
