import React from "react";

import classes from "./Card.module.css";
import formatNumber from "../../utils/formatNumber";

const Card = (props) => {
  const { informacao, color, title } = props;
  return (
    <div className={classes.Card}>
      <header style={{ color: color }} className={classes.Header}>
        {" "}
        {title}
      </header>
      <article style={{backgroundColor: color}} className={classes.Article}>
        <span className={classes.Number}>{formatNumber(informacao)}</span>
      </article>
    </div>
  );
};

export default Card;
