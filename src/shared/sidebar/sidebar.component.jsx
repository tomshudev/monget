import React from "react";
import "./sidebar.styles.scss";

import OutsideAlerter from "../outside-alerter/outside-alerter.component";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleSidebar } from "../../redux/layout/layout.actions";

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

const mapStateToProps = (state) => ({
  isOpen: state.layout.isSidebarOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSidebar: (isOpen) => dispatch(toggleSidebar(isOpen)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
