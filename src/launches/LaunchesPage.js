import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectLaunchesByPage } from "app/reducer";
import { LaunchesFilterForm } from "launches/LaunchesFilterForm";
import { LaunchesGrid } from "launches/LaunchesGrid/LaunchesGrid";
import { LaunchesList } from "launches/LaunchesList/LaunchesList";
import { LaunchesViewControl } from "launches/LaunchesViewControl";
import { LaunchesNotFound } from "launches/LaunchesNotFound";
import { LaunchesLoading } from "launches/LaunchesLoading";
import { useMediaQuery } from "common/hooks/useMediaQuery";
import { Pagination } from "common/components/Pagination";
import { getPagesCount } from "common/utilities";
import "launches/LaunchesPage.scss";

const DEFAULT_PAGE = 1;
const LAUNCHES_PER_PAGE = 12;

export function LaunchesPage() {
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
  const [currentView, setCurrentView] = useState("list");
  const totalLaunchesCount = useSelector((state) => state.totalLaunchesCount);
  const pagesCount = getPagesCount(totalLaunchesCount, LAUNCHES_PER_PAGE);
  const filter = useSelector((state) => state.filter);
  const isMobile = useMediaQuery("(max-width: 900px)");
  const isLoading = useSelector((state) => state.isLoading);
  const launches = useSelector((state) =>
    selectLaunchesByPage(state, currentPage, LAUNCHES_PER_PAGE)
  );

  // Reset current page if filter changes
  useEffect(() => {
    setCurrentPage(DEFAULT_PAGE);
  }, [filter]);

  function handleViewChange(view) {
    setCurrentView(view);
  }

  return (
    <div className="launchesPage container">
      <h1>Launches 🚀</h1>
      <div className="launchesControls">
        <LaunchesFilterForm />
        <LaunchesViewControl onViewChange={handleViewChange} />
      </div>
      {isLoading && !totalLaunchesCount && <LaunchesLoading />}
      {!isLoading && !totalLaunchesCount && <LaunchesNotFound />}
      {currentView === "list" || isMobile ? (
        <LaunchesList launches={launches} />
      ) : (
        <LaunchesGrid launches={launches} />
      )}
      <Pagination
        currentPage={currentPage}
        pagesCount={pagesCount}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
