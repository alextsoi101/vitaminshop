import React from "react";
import Chart from "react-apexcharts"

const SalesChart = () => {

  const options = {
    chart: {
      type: 'area',
      zoom: {
        enabled: false
      },
      width: '100%',
      height: '320px',
      fontFamily: 'Lexend, sans-serif',
      toolbar: {
        show: false,
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
    yaxis: {
      opposite: true

    },
    legend: {
      horizontalAlign: 'left'
    },
    colors: ['#17AF26', '#05422C'],
  }

  const series = [{
    name: 'Orders',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'Sale $',
    data: [11, 32, 45, 32, 34, 52, 41]
  }]

  return (
    <Chart 
      options={options} 
      series={series} 
      type="area" 
    />
  )
}

export default SalesChart;