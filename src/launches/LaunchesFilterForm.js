import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "app/actions";
import "launches/LaunchesFilterForm.scss";

export function LaunchesFilterForm() {
  const { rockets, sites, filter } = useSelector((state) => state);
  const dispatch = useDispatch();

  function onSelectChange(e) {
    const { name, value } = e.target;
    dispatch(
      changeFilter({
        ...filter,
        [name]: value,
      })
    );
  }

  const rocketSelectOptions = rockets.map((rocket) => (
    <option key={rocket} value={rocket}>
      {rocket}
    </option>
  ));

  const siteSelectOptions = sites.map((site) => (
    <option key={site} value={site}>
      {site}
    </option>
  ));

  return (
    <form className="launchesFilterForm form">
      <div className="form__field">
        <label className="form__label" htmlFor="rocketSelect">
          Rocket:
        </label>
        <div className="select">
          <select
            name="rocketName"
            value={filter.rocketName}
            onChange={onSelectChange}
            id="rocketSelect"
          >
            <option value="">All rockets</option>
            {rocketSelectOptions}
          </select>
        </div>
      </div>
      <div className="form__field">
        <label className="form__label" htmlFor="siteSelect">
          Launch site:
        </label>
        <div className="select">
          <select
            name="siteName"
            value={filter.siteName}
            onChange={onSelectChange}
            id="siteSelect"
          >
            <option value="">All launch sites</option>
            {siteSelectOptions}
          </select>
        </div>
      </div>
    </form>
  );
}
