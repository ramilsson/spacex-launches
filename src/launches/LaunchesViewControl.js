import { Icon } from "common/components/Icon";
import { useState, useEffect } from "react";
import "./LaunchesViewControl.scss";

const VIEWS = ["list", "grid"];
const DEFAULT_VIEW = VIEWS[0];

export function LaunchesViewControl({ onViewChange }) {
  const [currentView, setCurrentView] = useState(DEFAULT_VIEW);

  useEffect(() => {
    onViewChange(currentView);
  }, [currentView, onViewChange]);

  function handleClick(e) {
    const value = e.target.value;
    if (value) {
      setCurrentView(value);
    }
  }

  const viewButtons = VIEWS.map((view) => {
    const className =
      view === currentView
        ? "button button_icon button_active"
        : "button button_icon";
    return (
      <button key={view} className={className} value={view}>
        <Icon name={view} />
      </button>
    );
  });

  return (
    <div className="launchesViewControl field" onClick={handleClick}>
      <div className="field__label">View:</div>
      {viewButtons}
    </div>
  );
}
