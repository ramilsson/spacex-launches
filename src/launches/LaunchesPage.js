import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { LaunchesList } from "launches/LaunchesList";
import { LaunchesFilterForm } from "./LaunchesFilterForm";
import { Pagination } from "common/components/Pagination";
import { selectLaunchesByPage } from "app/reducer";
import { getPagesCount } from "common/utilities";
import "launches/LaunchesPage.scss";

const DEFAULT_PAGE = 1;
const LAUNCHES_PER_PAGE = 12;

export function LaunchesPage() {
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
  const totalLaunchesCount = useSelector((state) => state.totalLaunchesCount);
  const pagesCount = getPagesCount(totalLaunchesCount, LAUNCHES_PER_PAGE);
  const filter = useSelector((state) => state.filter);
  const launches = useSelector((state) =>
    selectLaunchesByPage(state, currentPage, LAUNCHES_PER_PAGE)
  );

  useEffect(() => {
    setCurrentPage(DEFAULT_PAGE);
  }, [filter]);

  return (
    <div className="launchesPage">
      <header>
        <div className="container">
          <h1>Launches 🚀</h1>
          <div className="launchesControls">
            <LaunchesFilterForm />
          </div>
          <p>
            Page {currentPage} of {pagesCount}
          </p>
        </div>
      </header>
      <LaunchesList launches={launches} />
      <div className="container">
        <Pagination
          currentPage={currentPage}
          pagesCount={pagesCount}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
