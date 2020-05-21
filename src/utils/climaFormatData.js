  export default (climaResponse) => {
    const min = [];
    const max = [];
    const umidade = [];
    const variancia = []
    const labels = [];


    for (const clima of climaResponse) {
      labels.push(clima.data);
      min.push(clima.min);
      max.push(clima.max);
      umidade.push(clima.umidade);
      variancia.push((clima.max - clima.min).toFixed(2));
    }

    const minFormat = {
      labels,
      datasets: [
        {
          label: "Temperatura mínima",
          data: min,
          backgroundColor: "rgba(248, 248, 42,0.4)",
          borderColor: "rgba(248, 248, 42,1)",
          borderCapStyle: "butt",
        },
      ],
    };

    console.log(minFormat)
    const maxFormat = {
      labels,
      datasets: [
        {
          label: "Temperatura máxima",
          data: max,
          backgroundColor: "rgba(255, 131, 13,0.4)",
          borderColor: "rgba(255, 131, 13,1)",
          borderCapStyle: "butt",
        },
      ],
    };
    const umidadeFormat = {
      labels,
      datasets: [
        {
          label: "Umidade",
          data: umidade,
          backgroundColor: "rgba(3, 149, 144,1)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
        },
      ],
    };

    const varianciaFormat = {
      labels,
      datasets: [
        {
          label: "Variação de temperatura",
          data: variancia,
          backgroundColor: "rgba(120, 198, 100,1)",
          borderColor: "rgba(120, 198, 100,1)",
          borderCapStyle: "butt",
        },
      ],
    };

    return {
      minFormat: minFormat,
      maxFormat: maxFormat,
      umidadeFormat: umidadeFormat,
      varianciaFormat: varianciaFormat
    }
  };