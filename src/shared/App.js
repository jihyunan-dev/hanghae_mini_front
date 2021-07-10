import React from "react";
import Header from "../components/Header";
import Register from '../pages/Register';
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Register />
    </>
  );
};

export default App;
