import React, { useState, useEffect, useCallback } from "react";
import { Line, Bar, HorizontalBar } from "react-chartjs-2";
import axios from "axios";

import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Grafico from './components/Graph/Grafico';

import Estado from './containers/Estado/Estado';

import "./App.css";

function App(props) {
  const [min, setMin] = useState([]);
  const [max, setMax] = useState([]);
  const [umidade, setUmidade] = useState([]);
  const [variancia, setVariancia] = useState([]);


  // const fetchCapital = async () => {
  //   const min = [];
  //   const max = [];
  //   const umidade = [];
  //   const variancia = []
  //   const labels = [];
  //   const capital = await axios.get("http://localhost:3001/");

  //   for (const dados of capital.data) {
  //     labels.push(dados.data);
  //     min.push(dados.min);
  //     max.push(dados.max);
  //     umidade.push(dados.umidade);
  //     variancia.push((dados.max - dados.min).toFixed(2));
  //   }

  //   const minFormat = {
  //     labels,
  //     datasets: [
  //       {
  //         label: "Temperatura mínima",
  //         data: min,
  //         backgroundColor: "rgba(75,192,192,0.4)",
  //         borderColor: "rgba(75,192,192,1)",
  //         borderCapStyle: "butt",
  //       },
  //     ],
  //   };
  //   const maxFormat = {
  //     labels,
  //     datasets: [
  //       {
  //         label: "Temperatura máxima",
  //         data: max,
  //         backgroundColor: "rgba(75,192,192,0.4)",
  //         borderColor: "rgba(75,192,192,1)",
  //         borderCapStyle: "butt",
  //       },
  //     ],
  //   };
  //   const umidadeFormat = {
  //     labels,
  //     datasets: [
  //       {
  //         label: "Umidade",
  //         data: umidade,
  //         backgroundColor: "rgba(75,192,192,0.4)",
  //         borderColor: "rgba(75,192,192,1)",
  //         borderCapStyle: "butt",
  //       },
  //     ],
  //   };

  //   const varianciaFormat = {
  //     labels,
  //     datasets: [
  //       {
  //         label: "Umidade",
  //         data: variancia,
  //         backgroundColor: "rgba(75,192,192,0.4)",
  //         borderColor: "rgba(75,192,192,1)",
  //         borderCapStyle: "butt",
  //       },
  //     ],
  //   };

  //   setMin(minFormat);
  //   setMax(maxFormat);
  //   setUmidade(umidadeFormat);
  //   setVariancia(varianciaFormat);
  // };


  const fetchSp = () => {
    const sp = [
      1149,
      1183,
      1233,
      1885,
      2418,
      2815,
      3202,
      3496,
      3612,
      3754,
      4258,
      4946,
      5477,
      5982,
      6131,
      6352,
      6418,
      6705,
      7764,
      7908,
      8744,
      9428,
      9668,
      9815,
      10342,
      10691,
      11225,
      11800,
      13098,
      13513,
      13989,
      15397,
      16638,
      18149,
      19087,
      19494,
      19822,
      20073,
      21140,
      23187,
      24273,
      25366,
      26787,
      27307,
      27771,
      28682,
      30402,
      31873,
    ];

    const date = [
      "2020-03-28",
      "2020-03-29",
      "2020-03-30",
      "2020-03-31",
      "2020-04-01",
      "2020-04-02",
      "2020-04-03",
      "2020-04-04",
      "2020-04-05",
      "2020-04-06",
      "2020-04-07",
      "2020-04-08",
      "2020-04-09",
      "2020-04-10",
      "2020-04-11",
      "2020-04-12",
      "2020-04-13",
      "2020-04-14",
      "2020-04-15",
      "2020-04-16",
      "2020-04-17",
      "2020-04-18",
      "2020-04-19",
      "2020-04-20",
      "2020-04-21",
      "2020-04-22",
      "2020-04-23",
      "2020-04-24",
      "2020-04-25",
      "2020-04-26",
      "2020-04-27",
      "2020-04-28",
      "2020-04-29",
      "2020-04-30",
      "2020-05-01",
      "2020-05-02",
      "2020-05-03",
      "2020-05-04",
      "2020-05-05",
      "2020-05-06",
      "2020-05-07",
      "2020-05-08",
      "2020-05-09",
      "2020-05-10",
      "2020-05-11",
      "2020-05-12",
      "2020-05-13",
      "2020-05-14",
    ];

    const casosDay = [
      34,
      50,
      652,
      533,
      397,
      387,
      294,
      116,
      142,
      504,
      688,
      531,
      505,
      149,
      221,
      66,
      287,
      1059,
      144,
      836,
      684,
      240,
      147,
      527,
      349,
      534,
      575,
      1298,
      415,
      476,
      1408,
      1241,
      1511,
      938,
      407,
      328,
      251,
      1067,
      2047,
      1086,
      1093,
      1421,
      520,
      464,
      911,
      1720,
      1471,
    ];

    const dataFormatSp = {
      labels: date,
      datasets: [
        {
          label: "Total de óbitos",
          data: sp,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
        },
      ],
    };
    const dataPerDaySp = {
      labels: date,
      datasets: [
        {
          label: "Total de óbitos",
          data: casosDay,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
        },
      ],
    };
  };
  let graphs = null;
  // if (isLoaded) {
  //   graphs = (
  //     <div className="Graficos">
  //       <Grafico Tipo={Line} dados={data}/>
  //       <Grafico Tipo={Bar} dados={totalCasos}/>
  //       {console.log(totalCasos)}
  //       <Grafico Tipo={Line} dados={obitosData}/>
  //       <Grafico Tipo={Line} dados={totalObitos}/>
  //       <Grafico Tipo={Line} dados={totalSp}/>
  //       <Grafico Tipo={Line} dados={perDaySp}/>

  //       <div className="Grafico">
  //         <Line data={min} width={500} height={350} />
  //       </div>
  //       <div className="Grafico">
  //         <Line data={max} width={500} height={350} />
  //       </div>
  //       <div className="Grafico">
  //         <Line data={umidade} width={500} height={350} />
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="App">
      <Header />
      <Estado />
      {graphs}
    </div>
  );
}

export default App;
