import { blue } from "@material-ui/core/colors";
import { Chart, registerables } from "chart.js";

export default function GraphComponent({ id }) {
  var ctx = document.getElementById(id).getContext("2d");

  Chart.register(...registerables);
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: "meet me",
      datasets: [
        {
          label: "My First Dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: true,

          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192,0.1)",
          tension: 0.5,
        },
      ],
    },
    options: {
      scales: {
        x: {
          display: false,
          title: {
            display: false,
          },
        },
        y: {
          display: false,
          title: {
            display: false,
          },
        },
      },
      plugins: {
        legend: { display: false },
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  });

  return myChart;
}
