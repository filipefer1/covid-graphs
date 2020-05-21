import React from "react";

import classes from "./Title.module.css";

function Title(props) {
  return (
    <div className={classes.Container}>
      <span className={classes.Title}>{props.children}</span>
    </div>
  );
}

export default Title;
