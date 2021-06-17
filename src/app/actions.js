import * as types from "app/actionTypes";

export function launchesLoadedSuccess(launches, totalLaunchesCount) {
  return {
    type: types.LAUNCHES_LOADED_SUCCESS,
    payload: { launches, totalLaunchesCount },
  };
}

export function launchesLoadedFailure(error) {
  return {
    type: types.LAUNCHES_LOADED_FAILURE,
    payload: { error },
  };
}

export function launchesLoading() {
  return {
    type: types.LAUNCHES_LOADING,
  };
}

export function filterChanged(filter) {
  return {
    type: types.FILTER_CHANGED,
    payload: { filter },
  };
}

export function changeFilter(filter) {
  return function (dispatch) {
    dispatch(
      fetchLaunches({
        rocket_name: filter.rocketName,
        site_name: filter.siteName,
      })
    );
  };
}

export function currentPageChanged(page) {
  return {
    type: types.CURRENT_PAGE_CHANGED,
    payload: { page },
  };
}

export function fetchLaunches(params) {
  return async function (dispatch) {
    dispatch(launchesLoading());
    const url = new URL("https://api.spacexdata.com/v3/launches");
    url.search = new URLSearchParams({ ...params, id: true }).toString();

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Could not fetch launches from the server");
      }
      const totalLaunchesCount = +response.headers.get("spacex-api-count");
      const launches = await response.json();

      dispatch(launchesLoadedSuccess(launches, totalLaunchesCount));
      dispatch(
        filterChanged({
          rocketName: params.rocket_name,
          siteName: params.site_name,
        })
      );
    } catch (error) {
      dispatch(launchesLoadedFailure(error));
    }
  };
}
