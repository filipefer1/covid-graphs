import React from "react";

import classes from './Grafico.module.css';

const Grafico = (props) => {
  const { Tipo, dados } = props;
  return (
    <div className={classes.Grafico}>
      <Tipo data={dados} width={500} height={350} />
    </div>
  );
};

export default Grafico
