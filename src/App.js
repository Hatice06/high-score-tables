import React from "react";
import "./App.css";
import allCountryScores from "./scores";
import AllCountriesCards from "./AllCountriesCards";


function App() {
  return (
   <AllCountriesCards allCountryScores={allCountryScores}/>
  );
}

export default App;
