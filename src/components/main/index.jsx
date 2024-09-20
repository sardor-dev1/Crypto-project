import React, { useContext, useEffect, useState, useCallback } from "react";
import { FloatingLabel, Table } from "flowbite-react";
import { inputTheme, tableTheme } from "../../themes/index";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import { Context } from "../../context/Context";
import { ACTION_TYPES } from "../../store/reducers";
import { useNavigate } from "react-router-dom";
import SkeletonLoader from "../skeletons/skeleton";
import MarkapSkeleton from "../skeletons/markap-skeleton";
import PaginationSkeleton from "../skeletons/pagination"; 
import "./style.scss";

export default function Index({ value }) {  
  console.log(value);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const { state, dispatch } = useContext(Context);
  const { crypts, watchlist } = state;

  const fetchCrypts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${value}&order=gecko_desc&per_page=10&page=${page}&sparkline=false&price_change_percentage=24h`
      );
      if (!response.ok) {
        throw new Error("HTTP error!");
      }
      const data = await response.json();

      setTimeout(() => {
        dispatch({ type: ACTION_TYPES.SET_CRYPTOS, payload: data });
        setLoading(false);
      }, 2000);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }, [page, dispatch, value]);

  useEffect(() => {
    fetchCrypts();
  }, [fetchCrypts]);

  useEffect(() => {
    const savedWatchlist = JSON.parse(
      localStorage.getItem("watchlist") || "[]"
    );
    dispatch({ type: ACTION_TYPES.SET_WATCHLIST, payload: savedWatchlist });
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const toggleWatchlist = useCallback(
    (cryptId) => {
      if (watchlist.includes(cryptId)) {
        dispatch({
          type: ACTION_TYPES.REMOVE_FROM_WATCHLIST,
          payload: cryptId,
        });
      } else {
        dispatch({ type: ACTION_TYPES.ADD_TO_WATCHLIST, payload: cryptId });
      }
    },
    [watchlist, dispatch]
  );

  const handleSearch = useCallback((e) => {
    setSearchTerm(e.target.value.toLowerCase());
  }, []);

  const handlePagination = useCallback((_, value) => {
    setPage(value);
  }, []);

  const filteredCrypts = crypts.filter(
    (crypt) =>
      crypt.name.toLowerCase().includes(searchTerm) ||
      crypt.symbol.toLowerCase().includes(searchTerm)
  );

  if (error) return (
    <div>
      <p className="text-center text-[24px] text-red-600 pt-2">Error: {error}</p>
    </div>
  );

  return (
    <section className="container">
      {loading ? (
        <MarkapSkeleton />
      ) : (
        <div>
          <h2 className="text-[#FFFFFF] text-[34px] font-[400] text-center py-[20px]">
            Cryptocurrency Prices by Market Cap
          </h2>
          <div className="pb-[20px]">
            <FloatingLabel
              onChange={handleSearch}
              className="bg-transparent text-[14px] font-[400] text-white"
              theme={inputTheme}
              variant="outlined"
              label="Search For a Crypto Currency.."
              sizing="sm"
            />
          </div>
        </div>
      )}

      <div className="pb-[40px]">
        <div className="overflow-x-auto">
          {loading ? (
            <SkeletonLoader />
          ) : (
            <Table className="divide-y shadow" hoverable theme={tableTheme}>
              <Table.Head>
                <Table.HeadCell>Coin</Table.HeadCell>
                <Table.HeadCell className="text-end">Price</Table.HeadCell>
                <Table.HeadCell className="text-end">24h Change</Table.HeadCell>
                <Table.HeadCell className="text-end">Market Cap</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y border-none">
                {filteredCrypts.map((crypt) => (
                  <Table.Row
                    className="border-b border-[#515151]"
                    key={crypt.id}
                  >
                    <Table.Cell className="whitespace-nowrap font-medium white">
                      <div className="flex items-center gap-3">
                        <img
                          src={crypt.image}
                          alt={crypt.name}
                          className="w-[50px] rounded-full h-[50px] object-contain"
                        />
                        <div className="flex flex-col gap-1">
                          <p
                            onClick={() => navigate(`/single/${crypt.id}`)}
                            className="cursor-pointer uppercase text-[24px] font-[400]"
                          >
                            {crypt.symbol}
                          </p>
                          <p className="font-[400] text-[14px] text-[#A9A9A9]">
                            {crypt.name}
                          </p>
                        </div>
                      </div>
                    </Table.Cell>
                    <Table.Cell className="text-end">
                      {value === "USD" ? "$" : value === "RUB" ? "₽" : "€"}{" "}
                      {crypt.current_price.toLocaleString("en-IN")}
                    </Table.Cell>
                    <Table.Cell className="text-end">
                      <div className="flex items-center justify-end gap-3">
                        <button onClick={() => toggleWatchlist(crypt.id)}>
                          <RemoveRedEyeRoundedIcon
                            style={{
                              color: watchlist.includes(crypt.id)
                                ? "#0ECB81"
                                : "inherit",
                            }}
                          />
                        </button>
                        <span
                          className={
                            crypt.price_change_percentage_24h > 0
                              ? "text-[#0ECB81] text-[14px] font-[500]"
                              : "text-[#FF0000] text-[14px] font-[500]"
                          }
                        >
                          {crypt.price_change_percentage_24h.toFixed(2)}%
                        </span>
                      </div>
                    </Table.Cell>
                    <Table.Cell className="text-end">
                      <p
                        className="cursor-pointer"
                        onClick={() => navigate(`/single/${crypt.id}`)}
                      >
                        {value === "USD" ? "$" : value === "RUB" ? "₽" : "€"}{" "}
                        {crypt.market_cap.toLocaleString("en-IN")}
                      </p>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          )}
          {loading ? (
            <PaginationSkeleton />
          ) : (
            <Stack
              className="flex py-5 items-center text-gray-200 justify-center"
              spacing={2}
            >
              <Pagination
                onChange={handlePagination}
                page={page}
                count={10}
                color="primary"
              />
            </Stack>
          )}
        </div>
      </div>
    </section>
  );
}
