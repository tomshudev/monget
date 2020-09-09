import React from "react";
import "./sidebar.styles.scss";

import OutsideAlerter from "../outside-alerter/outside-alerter.component";
import { Link } from "react-router-dom";

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div
      id="sidebar-container"
      className={`container ${!isOpen ? "closed" : ""}`}
    >
      <OutsideAlerter handle={() => toggleSidebar(false)}>
        <div
          className={`sidebar ${
            isOpen ? "sidebar__opened" : "sidebar__closed"
          }`}
        >
          <div className="links">
            <Link onClick={() => toggleSidebar(false)} className="link" to="/">
              Home
            </Link>
            <Link
              onClick={() => toggleSidebar(false)}
              className="link"
              to="/definer"
            >
              Definer
            </Link>
          </div>
        </div>
      </OutsideAlerter>
    </div>
  );
}

export default Sidebar;
