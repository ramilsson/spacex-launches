import React, { useState } from "react";
import { LaunchPanel } from "launches/LaunchPanel/LaunchPanel";
import { Launch } from "./components/Launch";
import "./LaunchesGrid.scss";

export function LaunchesGrid({ launches }) {
  const [selectedLaunch, selectLaunch] = useState(null);

  function unselectLaunch() {
    selectLaunch(null);
  }

  return (
    <section className="launchesGrid">
      {launches.map((launch) => (
        <Launch key={launch._id} launch={launch} onClick={selectLaunch} />
      ))}
      <LaunchPanel launch={selectedLaunch} onClose={unselectLaunch} />
    </section>
  );
}
