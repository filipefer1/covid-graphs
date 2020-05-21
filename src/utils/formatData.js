export const perDayFormat = (responseData) => {
  const casesPerDayLabel = [];
  const casesPerDay = [];

  const deathsPerDayLabel = [];
  const deathsPerDay = [];

  for (const data of responseData) {
    casesPerDayLabel.push(data.data);
    casesPerDay.push(data.casos);
    deathsPerDayLabel.push(data.data);
    deathsPerDay.push(data.mortes);
  }
  const casesPerDayFormat = {
    labels: casesPerDayLabel,
    datasets: [
      {
        label: "Casos por dia",
        data: casesPerDay,
        backgroundColor: "rgba(103, 45, 158,1)",
        borderCapStyle: "butt",
      },
    ],
  };
  const deathsPerDayFormat = {
    labels: deathsPerDayLabel,
    datasets: [
      {
        label: "Óbitos por dia",
        data: deathsPerDay,
        backgroundColor: "rgba(214, 84, 84,1)",
        borderCapStyle: "butt",
      },
    ],
  };

  return {
    casesPerDayFormat,
    deathsPerDayFormat,
  };
};


export const allFormat = (responseData) => {
  const casesLabel = [];
  const allCases = [];

  const deathsLabel = [];
  const allDeaths = [];

  let sumCases = 0;
  let sumDeaths = 0;

  for (const data of responseData) {
    if (!data.mortes) {
      sumDeaths += 0;
    } else {
      sumDeaths += data.mortes;
    }

    if (!data.casos) {
      sumCases += 0;
    } else {
      sumCases += data.casos;
    }
    casesLabel.push(data.data);
    allCases.push(sumCases);
    deathsLabel.push(data.data);
    allDeaths.push(sumDeaths);
  }
  const allCasesFormat = {
    labels: casesLabel,
    datasets: [
      {
        label: "Total de casos",
        data: allCases,
        backgroundColor: "rgba(133, 45, 184,0.4)",
        borderColor: "rgba(133, 45, 184,1)",
        borderCapStyle: "butt",
      },
    ],
  };

  const allDeathsFormat = {
    labels: deathsLabel,
    datasets: [
      {
        label: "Total de óbitos",
        data: allDeaths,
        backgroundColor: "rgba(214, 84, 84,0.4)",
        borderColor: "rgba(214, 84, 84,1)",
        borderCapStyle: "butt",
      },
    ],
  };

  return {
    allCasesFormat,
    allDeathsFormat,
  };
};