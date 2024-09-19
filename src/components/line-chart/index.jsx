import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "./style.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { data, options } from "../../data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const timePeriods = {
  "24h": "24 hours",
  "30d": "30 days",
  "3m": "3 months",
  "1y": "1 year",
};

const LineChart = () => {
  const [chartData, setChartData] = useState(data);
  const [chartOptions, setChartOptions] = useState(options);
  const [selectedPeriod, setSelectedPeriod] = useState("24h");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=USD&days=${selectedPeriod}&localization=false`
        );
        const result = await response.json();

        const labels = result.prices.map((price) =>
          new Date(price[0]).toLocaleDateString()
        );
        const prices = result.prices.map((price) => price[1]);

        setChartData({
          labels,
          datasets: [
            {
              label: "Price in USD",
              data: prices,
              fill: true,
              tension: 0.2,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [selectedPeriod]);

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  return (
    <div>
      <Line data={chartData} options={chartOptions} />
      <div className="button-group">
        {Object.keys(timePeriods).map((period) => (
          <button
            key={period}
            onClick={() => handlePeriodChange(period)}
            className={`period-button ${
              selectedPeriod === period ? "active" : ""
            }`}
          >
            {timePeriods[period]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LineChart;
