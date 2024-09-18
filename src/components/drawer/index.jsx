import React, { useContext, useEffect } from "react";
import { Button, Drawer } from "flowbite-react";
import { Context } from "../../context/Context";
import { ACTION_TYPES } from "../../store/reducers";

export default function WatchlistDrawer({ isOpen, handleClose }) {
  const { state, dispatch } = useContext(Context);
  const { crypts, watchlist } = state;

  useEffect(() => {
    // LocalStorage'dan watchlist ma'lumotlarini olish
    const savedWatchlist = JSON.parse(
      localStorage.getItem("watchlist") || "[]"
    );
    if (savedWatchlist.length > 0) {
      dispatch({ type: ACTION_TYPES.SET_WATCHLIST, payload: savedWatchlist });
    }
  }, []);

  useEffect(() => {
    // Watchlist o'zgarganda LocalStorage'ga saqlash
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const watchlistCrypts = crypts.filter((crypt) =>
    watchlist.includes(crypt.id)
  );

  const handleRemove = (cryptId) => {
    dispatch({ type: ACTION_TYPES.REMOVE_FROM_WATCHLIST, payload: cryptId });
  };

  return (
    <>
      <Drawer
        className="w-[500px] bg-[#515151]"
        open={isOpen}
        onClose={handleClose}
        position="right"
      >
        <div className="text-white text-center py-[30px]">
          <p className="text-[30px] font-[500]">WATCHLIST</p>
        </div>
        <Drawer.Items>
          <div className="grid grid-cols-2 gap-[35px]">
            {watchlistCrypts.map((crypt) => (
              <div
                key={crypt.id}
                className="flex flex-col items-center justify-center px-[40px] h-full py-[20px] rounded-[25px] w-full max-w-[220px] bg-[#14161A]"
              >
                <div className="w-[120px] h-[120px]">
                  <img
                    className="w-full object-contain"
                    src={crypt.image}
                    alt={crypt.name}
                  />
                </div>
                <p className="text-[20px] pt-[35px] pb-[15px] font-[400] text-white">
                  ₹ {crypt.current_price.toLocaleString("en-IN")}
                </p>
                <Button
                  className="px-5 flex item-center justify-center text-[20px] font-[400]"
                  color="failure"
                  onClick={() => handleRemove(crypt.id)}
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
