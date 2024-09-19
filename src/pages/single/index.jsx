import React, { useEffect, useState } from "react";
import LineChart from "../../components/line-chart/index";
import { useParams } from "react-router-dom";

export default function CoinDetails() {
  const { id } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoinData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch coin data");
        }
        const data = await response.json();
        setCoinData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCoinData();
  }, [id]);

  if (loading) {
    return <p className="text-white text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-white text-center">Error: {error}</p>;
  }

  return (
    <main className="pt-[80px] bg-[#14161A]">
      <div className="grid grid-cols-7 h-[100vh] w-full max-w-[1900px] mx-auto">
        <div className="border-r-2 border-gray-400 px-[20px] col-span-2">
          <div className="flex items-center justify-center">
            <img
              className="object-contain w-[200px] h-[200px]"
              src={coinData.image.large}
              alt={coinData.name}
            />
          </div>
          <h1 className="text-[48px] font-[700] text-white text-center py-[20px]">
            {coinData.name}
          </h1>
          <p className="text-[18px] font-[400] text-white">
            {coinData.description.en
              ? coinData.description.en.slice(0, 120) + "..."
              : "No description available."}
          </p>
          <div className="py-[15px]">
            <p className="text-[24px] font-[700] text-white">
              Rank:
              <span className="font-[400]">{coinData.market_cap_rank}</span>
            </p>
            <p className="text-[24px] font-[700] text-white">
              Current Price: ₹
              <span className="font-[400]">
                {coinData.market_data.current_price.inr}
              </span>
            </p>
            <p className="text-[24px] font-[700] text-white">
              Market Cap: ₹
              <span className="font-[400]">
                {coinData.market_data.market_cap.inr}
              </span>
            </p>
          </div>
        </div>
        <div className="col-span-5 p-[40px]">
          <LineChart />
        </div>
      </div>
    </main>
  );
}
