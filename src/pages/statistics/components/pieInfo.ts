
export const pieChartData  = {
  labels: ['Mobile views', 'Desktop'],
  datasets: [
    {
      label: '# of Votes',
      data: [86, 14],
      backgroundColor: [
        "#7F7FD5",
        "#E786D7"
      ],
      borderWidth: 0,
    },
  ],
};

const pieChartPlugins = {
    datalabels: {
      display: true,
      color: "white",
      formatter: (value: any) => {
        return value + "%"
      },
      padding: 3,
      font: {
        family: 'Raleway'
      }
    },
    // tooltip: {
    //   rtl: true,
    // },
    title: {
      color: 'white',
      display: true,
      font: {
        lineHeight: 21
      },
      
    }, 
    legend: {
      display: false,
      labels: {
        color: "blue",
        font: {
          size: 12,
          weight: "500"
        },
        padding:3,
      },
    },
}

export const pieChartOptions: any = {
  // hover: {
  //   axis: "xy",
  //   mode: 'x'
  // },
  borderColor: 'white',
  offset: 20,
  // cutout:20,
  // spacing: 2,
  events: [],
  radius: 50,
  rotation: 100,
  // indexAxis: "xy",
  layout: {
    // autoPadding: false,
    padding: {
      left: 50
    },
  },
  circumference: 360,
  plugins: pieChartPlugins
}