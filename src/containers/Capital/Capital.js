import React from "react";
import { Line, Bar } from "react-chartjs-2";

import Cards from "../../components/Cards/Cards";
import Card from "../../components/Card/Card";
import Graficos from "../../components/Graficos/Graficos";
import Grafico from "../../components/Graph/Grafico";

import capitalFormatData from "../../utils/capitalFormatData";
import Title from "../../components/Title/Title";

const {
  allCasesCard,
  allDeathsCard,
  allCasesFormat,
  allDeathsFormat,
  casesPerDayFormat,
  deathsPerDayFormat,
} = capitalFormatData();

function Capital() {
  return (
    <>
      <Title>CAPITAL</Title>

      <Cards>
        <Card
          title="TOTAL DE CASOS"
          informacao={allCasesCard}
          color="#394898"
        />
        <Card
          title="TOTAL DE ÓBITOS"
          informacao={allDeathsCard}
          color="#FF8670"
        />
      </Cards>
      <Graficos>
        <Grafico Tipo={Line} dados={casesPerDayFormat} />
        <Grafico Tipo={Line} dados={deathsPerDayFormat} />
        <Grafico Tipo={Bar} dados={allCasesFormat} />
        <Grafico Tipo={Bar} dados={allDeathsFormat} />
      </Graficos>
    </>
  );
}

export default Capital;
