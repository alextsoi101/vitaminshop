import React from "react";
import Chart from "react-apexcharts"

const OrdersPieChart = () => {

  const options = {
    chart: {
      width: '100%',
      type: 'pie',
      dataLabels: {
        enabled: false
      },
    },
    labels: ['No-account orders', 'Account orders'],
    legend: {
      show: false,
      horizontalAlign: 'left'
    },
    colors: ['#05422C', '#84d18c']
  }

  const series = [44, 56];

  return (
    <div className="orderspiechart">
      <Chart 
        options={options} 
        series={series} 
        type="pie" 
        
      />
    </div>
  )
}

export default OrdersPieChart;