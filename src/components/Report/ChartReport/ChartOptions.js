export const optionsDesc = {
  parsing: {
    xAxisKey: 'id',
    yAxisKey: 'nested.value',
  },
  responsive: true,
  layout: {
    padding: {
      left: 5,
      right: 5,
      top: 30,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        borderColor: 'white',
      },
    },
    y: {
      grid: {
        borderColor: 'white',
      },
      ticks: {
        display: true,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    subtitle: {
      display: true,
    },
  },
};

export const optionsMob = {
  indexAxis: 'y',
  layout: {
    padding: {
      left: 15,
      right: 30,
      top: 25,
    },
  },
  parsing: {
    xAxisKey: 'nested.value',
    yAxisKey: 'id',
  },

  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  maintainAspectRatio: true,
  responsive: true,
  aspectRatio: 1,
  scales: {
    x: {
      grid: {
        display: false,
        borderColor: 'white',
      },
      ticks: {
        display: true,
      },
    },
    y: {
      grid: {
        display: false,
        borderColor: 'white',
      },
      ticks: {
        align: 'start',
        mirror: true,
        labelOffset: -19,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    subtitle: {
      display: true,
    },
  },
};
