import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/options")
      .then((res) => res.json())
      .then((data) => setOptions(data));
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-primary-dark">Dashboard</h1>
      <table className="table-auto w-full mt-4 border-collapse">
        <thead>
          <tr className="bg-primary-light text-white">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Ticker</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Prediction</th>
          </tr>
        </thead>
        <tbody>
          {options.map((option) => (
            <tr key={option.id} className="bg-primary-background">
              <td className="border px-4 py-2">{option.id}</td>
              <td className="border px-4 py-2">{option.ticker}</td>
              <td className="border px-4 py-2">{option.price}</td>
              <td className="border px-4 py-2">{option.prediction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;