import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js modules
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const OptionsPage = () => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    fetch("http://localhost:5000/options")
      .then((res) => res.json())
      .then((data) => {
        setOptions(data.options || []); // Ensure options is an array
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);


  // Ensure valid data exists before rendering
  if (!options || options.length === 0) {
    return <p className="text-center text-primary-medium">Loading data...</p>;
  }

  // Prepare data for the bar chart
  const data = {
    labels: options.map((option) => option.ticker), // Ticker names as labels
    datasets: [
      {
        label: "Price",
        data: options.map((option) => option.price), // Prices as data
        backgroundColor: "#3a5a40",
        borderColor: "#2a4230",
        borderWidth: 1,
      },
    ],
  };

  const optionsConfig = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Ticker",
        },
      },
      y: {
        title: {
          display: true,
          text: "Price",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-primary-dark mb-4">Options</h1>
      <div className="bg-white shadow p-6 rounded-lg">
        <Bar data={data} options={optionsConfig} />
      </div>
    </div>
  );
};

export default OptionsPage;
