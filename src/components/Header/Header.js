import React from "react";
import classes from "./Header.module.css";

import virus from "../../assets/virus.png";

const Header = (props) => {
  return (
    <header className={classes.Header}>
      <div className={classes.LogoContainer}>
        <img className={classes.Img} src={virus} alt="Coronavírus logo" />
        <span className={classes.Title}>CORONAVÍRUS</span>
      </div>
      <div>Selecionar UF</div>
    </header>
  );
};

export default Header;
