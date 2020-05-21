import React from 'react';
import classes from './Graficos.module.css'

function Graficos(props) {
  return (
    <div className={classes.Graficos}>
      {props.children}
    </div>
  );
}

export default Graficos;