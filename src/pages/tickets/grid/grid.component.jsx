import React from "react";
import "./grid.styles.scss";

function Grid({ classes, children }) {
  return <div className={`grid ${classes}`}>{children}</div>;
}

export default Grid;
