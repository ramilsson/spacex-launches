import React, { useState } from "react";
import { LaunchPanel } from "launches/LaunchPanel/LaunchPanel";
import { Launch } from "./components/Launch";
import "./LaunchesList.scss";
import { useSelector } from "react-redux";

export function LaunchesList({ launches }) {
  const [selectedLaunch, selectLaunch] = useState(null);
  const isLoading = useSelector((state) => state.isLoading);

  function unselectLaunch() {
    selectLaunch(null);
  }

  return (
    <section className={`launchesList ${isLoading && "launchesList_loading"}`}>
      {launches.map((launch) => (
        <Launch key={launch._id} launch={launch} onClick={selectLaunch} />
      ))}
      <LaunchPanel launch={selectedLaunch} onClose={unselectLaunch} />
    </section>
  );
}
