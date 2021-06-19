import * as types from "app/actionTypes";
import { getOffset } from "common/utilities";

const initialState = {
  launches: [],
  rockets: [],
  sites: [],
  filter: {
    rocketName: "",
    siteName: "",
  },
  totalLaunchesCount: 0,
  error: null,
  isLoading: false,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LAUNCHES_LOADED_SUCCESS: {
      const { launches, totalLaunchesCount } = action.payload;
      const newState = {
        ...state,
        launches,
        totalLaunchesCount,
        isLoading: false,
      };

      // Change the rockets/sites arrays only if they are empty
      if (!state.rockets.length || !state.sites.length) {
        // Set of unique rocket names of launches
        const rockets = new Set(
          launches.map((launch) => launch.rocket.rocket_name)
        );
        // Set of unique site names of launches
        const sites = new Set(
          launches.map((launch) => launch.launch_site.site_name)
        );
        newState.rockets = Array.from(rockets);
        newState.sites = Array.from(sites);
      }

      return newState;
    }
    case types.LAUNCHES_LOADED_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    }
    case types.LAUNCHES_LOADING: {
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    }
    case types.FILTER_CHANGED: {
      const { rocketName, siteName } = action.payload.filter;
      return {
        ...state,
        filter: {
          rocketName: rocketName || "",
          siteName: siteName || "",
        },
        currentPage: initialState.currentPage,
      };
    }
    default: {
      return state;
    }
  }
}

export function selectLaunchesByPage(state, page, launchesPerPage) {
  const offset = getOffset(page, launchesPerPage);
  return state.launches.slice(offset, offset + launchesPerPage);
}
