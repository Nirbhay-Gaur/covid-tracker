import React from "react";
import { Pie } from "react-chartjs-2";
import styles from "./Chart.module.css";

function Chart({ data: { confirmed, recovered, deaths } }) {
  const barChart = confirmed ? (
    <Pie
      data={{
        labels: ["Confirmed", "Recovered", "Deaths"],
        datasets: [
          {
            data: [confirmed, recovered, deaths],
            backgroundColor: [
              "rgba(0,0,255,0.5)",
              "rgba(0,255,0,0.5)",
              "rgba(255,0,0,0.5)",
            ],
            borderColor: ["rgb(0,0,255)", "rgb(0,255,0)", "rgb(255,0,0)"],
            borderWidth: 1,
            hoverOffset: 5,
          },
        ],
      }}
    />
  ) : null;

  return <div className={styles.container}>{barChart}</div>;
}

export default Chart;
