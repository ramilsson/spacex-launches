import React from "react";
import { scrollToTop } from "common/utilities";
import "common/components/Pagination.scss";

export function Pagination({ currentPage, pagesCount, onPageChange }) {
  const pageButtons = [];

  function handleClick(e) {
    const page = e.target.value;
    if (!page) return;

    scrollToTop();

    switch (page) {
      case "previous": {
        onPageChange(currentPage - 1);
        break;
      }
      case "next": {
        onPageChange(currentPage + 1);
        break;
      }
      default: {
        onPageChange(+page);
        break;
      }
    }
  }

  for (let page = 1; page <= pagesCount; page++) {
    const className = page === currentPage ? "button button_active" : "button";
    pageButtons.push(
      <button key={page} className={className} value={page}>
        {page}
      </button>
    );
  }

  const previousPageButton = currentPage !== 1 && (
    <button className="button" value="previous">
      Previous
    </button>
  );

  const nextPageButton = currentPage !== pagesCount && (
    <button className="button" value="next">
      Next
    </button>
  );

  if (!pagesCount || pagesCount < 2) {
    return null;
  }

  return (
    <nav className="pagination" onClick={handleClick}>
      {previousPageButton}
      {pageButtons}
      {nextPageButton}
    </nav>
  );
}
