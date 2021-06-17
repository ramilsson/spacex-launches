import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "app/store";
import { fetchLaunches } from "app/actions";
import { LaunchesPage } from "launches/LaunchesPage";

function App() {
  useEffect(() => {
    store.dispatch(fetchLaunches());
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <LaunchesPage />
      </div>
    </Provider>
  );
}

export default App;
