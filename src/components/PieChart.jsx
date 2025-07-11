import React from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

/**
 * @param {Object[]} colors
 * @param {string} colors[].name
 * @param {number} colors[].pins
 * @param {number} colors[].bumper
 */
function PieChart({ colors }) {
  const data = {
    labels: colors.map(
      (c) => `${c.name} (Pins: ${c.pins}, Bumper: ${c.bumper}%)`
    ),
    datasets: [
      {
        data: colors.map((c) => c.pins * c.bumper),
        backgroundColor: [
          "#e74c3c",
          "#3498db",
          "#2ecc71",
          "#f1c40f",
          "#9b59b6",
          "#1abc9c",
          "#e67e22",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto" }}>
      <Pie data={data} />
    </div>
  );
}

export default PieChart;