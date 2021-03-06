import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "common/components/Spinner";
import { changeFilter } from "app/actions";
import "./LaunchesFilterForm.scss";

export function LaunchesFilterForm() {
  const { rockets, sites, filter, isLoading } = useSelector((state) => state);
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
      <div className="field">
        <label className="field__label" htmlFor="rocketSelect">
          Rocket:
        </label>
        <div className="select">
          <select
            name="rocketName"
            value={filter.rocketName}
            onChange={onSelectChange}
            id="rocketSelect"
            disabled={isLoading && "disabled"}
          >
            <option value="">All rockets</option>
            {rocketSelectOptions}
          </select>
        </div>
      </div>
      <div className="field">
        <label className="field__label" htmlFor="siteSelect">
          Launch site:
        </label>
        <div className="select">
          <select
            name="siteName"
            value={filter.siteName}
            onChange={onSelectChange}
            id="siteSelect"
            disabled={isLoading && "disabled"}
          >
            <option value="">All launch sites</option>
            {siteSelectOptions}
          </select>
        </div>
      </div>
      {isLoading && <Spinner />}
    </form>
  );
}
