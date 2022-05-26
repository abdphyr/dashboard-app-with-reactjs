

export const barInfo = {
  labels: ["<18", "18-21", "21-24", "24-27", "27-30", "30-35", "35-40", ">40"],
  datasets: [
    {
      // barPercentage: 0.5,
      barThickness: 20,
      // maxBarThickness: 8,
      // minBarLength: 2,
      borderRadius: 5,
      label: 'women',
      data: [1,1,1,35,20,1,10, 1],
      backgroundColor: "#E786D7"
    },
    {
      borderRadius: 5,
      barThickness: 20,
      label: 'men',
      data: [1,20,20,20,2,1, 1, 8],
      backgroundColor: "#7F7FD5"
    }
  ]
}

export const barOptions = (isDark: boolean): any => {
  return {
    aspectRatio: 4, 
    layout: {
      padding: 10
    },
    elements: {},
    scales: {
      x: {
        grid: {
          color: isDark ? "#4D4D4D" : '#cacaca'
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 20,
          callback: (label: any) => {
            return `${label} % -`
          },
        },
        grid: {
          color: isDark ? "#4D4D4D" : '#cacaca'
        }
      }
    },
    plugins: {
      datalabels: {
        display: false,
        padding: 10,
        formatter: (value: any) => {
          return ''
        },
      },
      title: {
        fullSize: true,
        color: 'red'
      },
      
      legend: {
        display: false,
        position: 'top',
        align: 'end',
        labels: {
          usePointStyle: true,
          boxWidth: 16,
          boxHeight: 16,
          boxPadding: 10
        }
      },
    },
  }
}