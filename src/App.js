import React from "react";
import "./App.css";
import Home from "./pages/home/home.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Definer from "./pages/definer/definer.component";
import Header from "./shared/header/header.component";
import { useDataLayerValue } from "./DataLayer";
import Sidebar from "./shared/sidebar/sidebar.component";

import "antd/dist/antd.css";

function App() {
  const [{ isSidebarOpen }, dispatch] = useDataLayerValue();

  function toggleSidebar(isOpen) {
    console.log("here", isOpen);
    dispatch({
      type: "TOGGLE_SIDEBAR",
      isOpen: !isSidebarOpen,
    });
  }

  function closeSidebar() {
    dispatch({
      type: "TOGGLE_SIDEBAR",
      isOpen: false,
    });
  }

  return (
    <div className="App">
      <Router>
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={closeSidebar} />
        <Switch>
          <Route path="/definer">
            <Definer />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
