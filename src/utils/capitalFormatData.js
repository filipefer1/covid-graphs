const capital = {
  cases: [
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
    33992,
    35429,
    35931,
    36188,
    37640,
    39466,
  ],
  deaths: [
    76,
    89,
    103,
    121,
    144,
    164,
    186,
    212,
    220,
    244,
    296,
    339,
    384,
    409,
    422,
    445,
    456,
    512,
    558,
    603,
    643,
    686,
    700,
    715,
    753,
    778,
    912,
    1010,
    1099,
    1114,
    1172,
    1321,
    1439,
    1522,
    1607,
    1661,
    1673,
    1683,
    1801,
    1910,
    1986,
    2110,
    2223,
    2266,
    2283,
    2407,
    2496,
    2596,
    2674,
    2792,
    2835,
    2856,
    3029,
    3135,
  ],
  date: [
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
    "2020-05-15",
    "2020-05-16",
    "2020-05-17",
    "2020-05-18",
    "2020-05-19",
    "2020-05-20",
  ],
};

export default () => {
  const { cases, deaths, date } = capital;
  const allCasesCard = cases.splice(-1)[0];
  const allDeathsCard = deaths.splice(-1)[0];

  const casesPerDay = [];
  const deathsPerDay = [];

  for (let caseDay = 0; caseDay < cases.length - 1; caseDay++) {
    casesPerDay[caseDay] = cases[caseDay + 1] - cases[caseDay];
  }

  for (let deathsDay = 0; deathsDay < deaths.length - 1; deathsDay++) {
    deathsPerDay[deathsDay] = deaths[deathsDay + 1] - deaths[deathsDay];
  }

  const allCasesFormat = {
    labels: date,
    datasets: [
      {
        label: "Total de casos",
        data: cases,
        backgroundColor: "rgba(57, 72, 152,0.4)",
        borderColor: "rgba(57, 72, 152,1)",
        borderCapStyle: "butt",
      },
    ],
  };
  const allDeathsFormat = {
    labels: date,
    datasets: [
      {
        label: "Total de óbitos",
        data: deaths,
        backgroundColor: "rgba(255, 134, 112,1)",
        borderCapStyle: "butt",
      },
    ],
  };
  const casesPerDayFormat = {
    labels: date,
    datasets: [
      {
        label: "Casos por dia",
        data: casesPerDay,
        backgroundColor: "rgba(57, 72, 152,0.4)",
        borderColor: "rgba(57, 72, 152,1)",
        borderCapStyle: "butt",
      },
    ],
  };
  const deathsPerDayFormat = {
    labels: date,
    datasets: [
      {
        label: "Óbitos por dia",
        data: deathsPerDay,
        backgroundColor: "rgba(255, 134, 112,0.4)",
        borderColor: "rgba(255, 134, 112,1)",
        borderCapStyle: "butt",
      },
    ],
  };

  return {
    allCasesCard,
    allDeathsCard,
    allCasesFormat,
    allDeathsFormat,
    casesPerDayFormat,
    deathsPerDayFormat,
  };
};
