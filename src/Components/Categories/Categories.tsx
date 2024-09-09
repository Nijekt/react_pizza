import { FC } from "react";

type CategoriesProps = {
  categoryId: number;
  onClickCategory: (index: number) => void;
};

const Categories: FC<CategoriesProps> = ({ categoryId, onClickCategory }) => {
  const categories = ["All", "Meats", "Vegeterian", "Grill", "Spicy", "Closed"];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={categoryId === index ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
