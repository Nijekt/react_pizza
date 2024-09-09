import React, { FC } from "react";
import styles from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";

type PaginationTypes = {
  currentPage: number;
  onChangePage: (page: number) => void;
};

const Pagination: FC<PaginationTypes> = ({ currentPage, onChangePage }) => {
  return (
    <>
      <ReactPaginate
        className={styles.pagination}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={currentPage - 1}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
