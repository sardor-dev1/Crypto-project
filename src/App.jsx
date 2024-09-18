import React, { useReducer } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import SinglePage from "./pages/single";
import { Context } from "./context/Context";
import reducer, { initialState } from "./store/reducers";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single" element={<SinglePage />} />
        </Routes>
      </Router>
    </Context.Provider>
  );
};

export default App;
