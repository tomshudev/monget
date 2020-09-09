import React from "react";
import "./header.styles.scss";

function Header({ toggleSidebar }) {
  return (
    <div className="header">
      <svg
        onClick={() => toggleSidebar(true)}
        className="sidebar-open ignore-alerter"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>
  );
}

export default Header;
