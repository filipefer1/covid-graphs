import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";

import Graficos from "../../components/Graficos/Graficos";
import Grafico from "../../components/Graph/Grafico";
import Title from "../../components/Title/Title";
import api from "../../services/api";

import climaFormatData from "../../utils/climaFormatData";

function Clima() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [min, setMin] = useState([]);
  const [max, setMax] = useState([]);
  const [umidade, setUmidade] = useState([]);
  const [variancia, setVariancia] = useState([]);

  useEffect(() => {
    setIsLoaded(false);
    const fetchDataWeather = async () => {
      const dataWeather = await api.get("http://localhost:3001/");

      const {
        minFormat,
        maxFormat,
        umidadeFormat,
        varianciaFormat,
      } = climaFormatData(dataWeather.data);

      setMin(minFormat);
      setMax(maxFormat);
      setUmidade(umidadeFormat);
      setVariancia(varianciaFormat);
    };

    fetchDataWeather();
    setIsLoaded(true)
  }, []);

  return (
    <>
      <Title>CLIMA</Title>

      {isLoaded && <Graficos>
        <Grafico Tipo={Line} dados={min} />
        <Grafico Tipo={Line} dados={max} />
        <Grafico Tipo={Bar} dados={umidade} />
        <Grafico Tipo={Bar} dados={variancia} />
      </Graficos>}
    </>
  );
}

export default Clima;
