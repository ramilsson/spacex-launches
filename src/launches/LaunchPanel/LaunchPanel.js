import React from "react";
import { LaunchLinks } from "./components/LaunchLinks";
import { LaunchPayloads } from "./components/LaunchPayloads";
import { LaunchSuccessLabel } from "./components/LaunchSuccessLabel";
import { SidePanel } from "common/components/SidePanel";
import { formatDate, splitAndCapitalize } from "common/utilities";
import "./LaunchPanel.scss";

export function LaunchPanel({ launch, onClose }) {
  if (!launch) {
    return <SidePanel />;
  }

  const missionName = launch.mission_name;
  const imageUrl = launch.links.mission_patch_small;
  const date = formatDate(launch.launch_date_utc);
  const isSuccess = launch.launch_success;
  const rocketName = launch.rocket.rocket_name;
  const rocketType = launch.rocket.rocket_type;
  const details = launch.details || "Upcoming...";
  const payloads = launch.rocket.second_stage.payloads;
  const links = getLaunchLinks(launch);

  return (
    <SidePanel title={missionName} onClose={onClose}>
      <div className="launchPanel__imageContainer">
        <img src={imageUrl} alt={missionName} />
      </div>
      <div className="launchPanel__caption">
        <span>📅 {date}</span>
        <LaunchSuccessLabel isSuccess={isSuccess} />
      </div>
      <h2 className="launchPanel__rocketName">{rocketName}</h2>
      <span className="text text_muted">{rocketType}</span>
      <p>{details}</p>
      <h3>Payload</h3>
      <LaunchPayloads payloads={payloads} />
      <LaunchLinks links={links} />
    </SidePanel>
  );
}

function getLaunchLinks(launch) {
  const neededLinks = [
    "reddit_campaign",
    "reddit_launch",
    "reddit_recovery",
    "reddit_media",
    "presskit",
    "article_link",
    "wikipedia",
    "video_link",
  ];

  const links = Object.entries(launch.links).map(([name, url]) => {
    const newName = splitAndCapitalize(name, "_");
    return { name, url, newName };
  });

  return links.filter((link) => link.url && neededLinks.includes(link.name));
}
