import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";

import Cards from "../../components/Cards/Cards";
import Card from "../../components/Card/Card";
import Graficos from "../../components/Graficos/Graficos";
import Grafico from "../../components/Graph/Grafico";
import api from "../../services/api";

import classes from "./Estado.module.css";

import { allFormat, perDayFormat } from "../../utils/formatData";

function Estado() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [allCasesCard, setAllCasesCard] = useState(0);
  const [allDeathsCard, setAllDeathsCard] = useState(0);

  const [allCases, setAllCases] = useState([]);
  const [allDeaths, setAllDeaths] = useState([]);

  const [casesPerDay, setCasesPerDay] = useState([]);
  const [deathsPerDay, setDeathsPerDay] = useState([]);

  useEffect(() => {
    setIsLoaded(false);
    const apiData = async () => {
      const response = await api.get("/sp");

      const { allCasesFormat, allDeathsFormat } = allFormat(
        response.data.casosEstado
      );

      const { casesPerDayFormat, deathsPerDayFormat } = perDayFormat(
        response.data.casosEstado
      );

      setAllCasesCard(response.data.casos);
      setAllDeathsCard(response.data.mortes);
      setAllCases(allCasesFormat);
      setAllDeaths(allDeathsFormat);
      setCasesPerDay(casesPerDayFormat);
      setDeathsPerDay(deathsPerDayFormat);
    };

    apiData();
    setIsLoaded(true);
  }, []);

  return (
    <>
      {isLoaded && (
        <>
          <div className={classes.Container}>
            <span className={classes.Estado}>ESTADO</span>
          </div>
          <Cards>
            <Card
              title="TOTAL DE CASOS"
              informacao={allCasesCard}
              color="#686076"
            />
            <Card
              title="TOTAL DE ÓBITOS"
              informacao={allDeathsCard}
              color="#e02041"
            />
          </Cards>
          <Graficos>
            <Grafico Tipo={Line} dados={allCases} />
            <Grafico Tipo={Line} dados={allDeaths} />
            <Grafico Tipo={Bar} dados={casesPerDay} />
            <Grafico Tipo={Bar} dados={deathsPerDay} />
          </Graficos>
        </>
      )}
    </>
  );
}

export default Estado;
