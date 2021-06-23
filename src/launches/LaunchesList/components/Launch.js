import React from "react";
import { formatDate } from "common/utilities";

export function Launch({ launch, onClick }) {
  const imageUrl = launch.links.mission_patch_small;
  const title = launch.mission_name;
  const details = launch.details || "Upcoming...";
  const date = formatDate(launch.launch_date_utc);

  return (
    <a href={`#${title}`} className="launch" onClick={() => onClick(launch)}>
      <div className="launch__image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="launch__container">
        <header className="launch__header">
          <h2 className="launch__title">{title}</h2>
          <span className="launch__date">{date}</span>
        </header>
        <p className="launch__details">{details}</p>
      </div>
    </a>
  );
}
