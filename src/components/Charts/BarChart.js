import React from 'react';
// import { Bar } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  // Define your data and options
  const data = {
    labels: ['A', 'B', 'C', 'D'],
    datasets: [
      {
        label: 'Sample Data',
        data: [10, 20, 15, 25],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart">
      <Bar data={data} options={options} />
      uhdsh
    </div>
  );
};

export default BarChart;
