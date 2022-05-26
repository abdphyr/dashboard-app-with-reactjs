
export const lineData = {
  labels: ['31/01', '01/02', '02/02', '03/02', '31/01', '04/02', '05/02', '06/02'],
  datasets: [
    {
      label: 'Total',
      data: [0, 1.7, 0.1, 3, .3, 1, 2.5, 0.1],
      borderWidth: 1,
      fill: false,
      lineTension: 0.5,
      borderColor: "#7F7FD5",
      pointBackgroundColor:"#E786D7",
      pointRadius: 3,
    },
    {
      label: 'Follower',
      data: [1, 2.7, 1.1, 0.1, 3, 2, 0.5, 2],
      borderWidth: 1,
      fill: false,
      lineTension: 0.5,
      borderColor: "#E786D7",
      pointBackgroundColor:"#7F7FD5",
      pointRadius: 3,
    },
  ]
}

export const lineOptions = {
  aspectRatio: 6,
  responsive: true,
  maintainAspectRatio: true, 
  plugins: {
    legend: {
      display: false
    }
  },
  line: {
    datasets: {
      tension: 0
    }
  },
  scales: {
    x: {
      title: {

      },
      ticks: {
        stepSize: 10
      }
    },
    y: {
      ticks: {
        stepSize: 1.5,
        min: 0
      }
    },
  },
  elements: {
    point: {
      radius: 1
    },
    line: {
      tension: 0.5,
    }
  }
}