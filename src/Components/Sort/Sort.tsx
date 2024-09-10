import React, { FC, memo, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSort,
  setSortDirection,
  sortSelector,
  SortType,
} from "../../store/slices/filterSlice";
import { useAppDispatch } from "../../store/store";

type SortProps = {
  sortValue: SortType;
};

const Sort: FC<SortProps> = memo(({ sortValue }) => {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!event.composedPath().includes(sortRef.current as EventTarget)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleChooseSort = (obj: SortListItem) => {
    dispatch(setSort({ ...obj, sortDirection: sortValue.sortDirection }));
    setIsOpen(false);
  };

  const toogleSortDirection = () => {
    dispatch(
      setSortDirection(sortValue.sortDirection == "desc" ? "asc" : "desc")
    );
  };

  type SortListItem = {
    name: string;
    sort: "rating" | "title" | "price";
  };

  const sortList: SortListItem[] = [
    { name: "popularity", sort: "rating" },
    { name: "price", sort: "price" },
    { name: "alphabet", sort: "title" },
  ];

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Sorted by:</b>
        <span onClick={() => setIsOpen(!isOpen)}>{sortValue.name}</span>
        <b className="sort__arrow" onClick={() => toogleSortDirection()}>
          ↕
        </b>
      </div>

      {isOpen && (
        <div className="sort__popup">
          <ul>
            {sortList.map((obj, index) => (
              <li
                key={index}
                className={sortValue.sort === obj.sort ? "active" : ""}
                onClick={() => handleChooseSort(obj)}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default Sort;
