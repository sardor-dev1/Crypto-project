export const ACTION_TYPES = {
  SET_CRYPTOS: "SET_CRYPTOS",
  ADD_TO_WATCHLIST: "ADD_TO_WATCHLIST",
  REMOVE_FROM_WATCHLIST: "REMOVE_FROM_WATCHLIST",
  LOAD_WATCHLIST: "LOAD_WATCHLIST",
};

// LocalStorage'dan watchlist'ni olish
const loadWatchlistFromStorage = () => {
  try {
    const watchlist = localStorage.getItem("watchlist");
    return watchlist ? JSON.parse(watchlist) : [];
  } catch (error) {
    console.error("Error loading watchlist from localStorage:", error);
    return [];
  }
};

// LocalStorage'ga watchlist'ni saqlash
const saveWatchlistToStorage = (watchlist) => {
  try {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  } catch (error) {
    console.error("Error saving watchlist to localStorage:", error);
  }
};

export const initialState = {
  crypts: [],
  watchlist: loadWatchlistFromStorage(),
};

export default function reducer(state, action) {
  let newState;
  switch (action.type) {
    case ACTION_TYPES.SET_CRYPTOS:
      newState = {
        ...state,
        crypts: action.payload,
      };
      break;
    case ACTION_TYPES.ADD_TO_WATCHLIST:
      newState = {
        ...state,
        watchlist: [...state.watchlist, action.payload],
      };
      saveWatchlistToStorage(newState.watchlist);
      break;
    case ACTION_TYPES.REMOVE_FROM_WATCHLIST:
      newState = {
        ...state,
        watchlist: state.watchlist.filter((id) => id !== action.payload),
      };
      saveWatchlistToStorage(newState.watchlist);
      break;
    case ACTION_TYPES.LOAD_WATCHLIST:
      newState = {
        ...state,
        watchlist: loadWatchlistFromStorage(),
      };
      break;
    default:
      return state;
  }
  return newState;
}
