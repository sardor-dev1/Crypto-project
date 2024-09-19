import React, { useContext, useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import { carouselTheme } from "../../themes/index";
import { Context } from "../../context/Context";
import { ACTION_TYPES } from "../../store/reducers";
import CarouselSkeleton from "../../components/skeletons/carousel-skeleton"; // Ensure the correct path
import "./style.scss";

export default function Index() {
  const { state, dispatch } = useContext(Context);
  const { crypts, watchlist } = state;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedWatchlist = JSON.parse(
      localStorage.getItem("watchlist") || "[]"
    );
    if (savedWatchlist.length > 0) {
      dispatch({ type: ACTION_TYPES.SET_WATCHLIST, payload: savedWatchlist });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  useEffect(() => {
    if (crypts.length > 0) {
      setLoading(false);
    }
  }, [crypts]);

  const watchlistCrypts = crypts.filter((crypt) =>
    watchlist.includes(crypt.id)
  );

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const groupedCrypts = chunkArray(watchlistCrypts, 4);

  return (
    <section className="hero pt-[130px]">
      <div className="container">
        {loading ? (
          <CarouselSkeleton />
        ) : (
          <>
            <h1 className="text-[#87CEEB] text-[60px] font-[700] text-center">
              CRYPTOFOLIO WATCH LIST
            </h1>
            <p className="text-[#A9A9A9] text-center text-[14px] font-[500]">
              Get all the Info regarding your favorite Crypto Currency
            </p>
            <div className="pt-[30px] pb-[20px]">
              <div className="h-56 sm:h-[120px] xl:h-80 2xl:h-96">
                <Carousel theme={carouselTheme} slideInterval={2000}>
                  {groupedCrypts.map((group, groupIndex) => (
                    <div
                      key={groupIndex}
                      className="flex items-center justify-evenly"
                    >
                      {group.map((crypt) => (
                        <div
                          key={crypt.id}
                          className="flex flex-col items-center"
                        >
                          <img
                            className="w-[80px] h-[80px]"
                            src={crypt.image}
                            alt={crypt.name}
                          />
                          <div className="flex gap-3 items-center justify-center ">
                            <p className="uppercase text-[16px] font-[400] text-white">
                              {crypt.symbol}
                            </p>
                            <p className="text-[#0ECB81] py-[10px] text-[16px] font-[500]">
                              {crypt.market_cap.toFixed(2)}
                            </p>
                          </div>
                          <p className="text-[22px] font-[500] text-white">
                            {crypt.current_price}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
