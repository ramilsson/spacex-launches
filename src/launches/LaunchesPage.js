import React from "react";
import { useSelector } from "react-redux";
import { LaunchesList } from "launches/LaunchesList";
import { LaunchesFilterForm } from "./LaunchesFilterForm";
import { Pagination } from "common/components/Pagination";
import { selectLaunchesByPage } from "app/reducer";
import { getPagesCount } from "common/utilities";
import "launches/LaunchesPage.scss";

export function LaunchesPage() {
  const launches = useSelector(selectLaunchesByPage);
  const currentPage = useSelector((state) => state.currentPage);
  const launchesPerPage = useSelector((state) => state.launchesPerPage);
  const totalLaunchesCount = useSelector((state) => state.totalLaunchesCount);
  const pagesCount = getPagesCount(totalLaunchesCount, launchesPerPage);

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
        <Pagination pagesCount={pagesCount} />
      </div>
    </div>
  );
}
