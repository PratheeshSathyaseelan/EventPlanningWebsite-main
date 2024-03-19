import React from "react";
import Chart from "react-apexcharts";

const Dchart = () => {
  const options = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false // Hide the toolbar
      }
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      labels: {
        style: {
          colors: '#ffffff' // Set font color to white
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#ffffff' // Set font color to white
        }
      }
    },
    grid: {
      borderColor: 'transparent' // Set grid border color to make it less visible
    },
    colors: ['rgba(235, 125, 180, 0.75)'], // Set line color to white
    dataLabels: {
      enabled: false // Disable data labels
    }
  };

  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70]
    }
  ];

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options}
            series={series}
            type="bar"
            width="500"
          />
        </div>
      </div>
    </div>
  );
};

export default Dchart;
