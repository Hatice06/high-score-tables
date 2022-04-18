import React, { useState } from "react";
import "./App.css";
import allCountryScores from "./scores";
import CountryScoresCard from "./CountryScoresCard";

function App() {
  const [buttonTitle, setButtonTitle] = useState("Low to High Scores");
  const [allScores, setAllScores] = useState(allCountryScores);

  const handleClick = () => {
    if (buttonTitle === "Low to High Scores") {
      allCountryScores.map((country) =>
        country.scores.sort((a, b) => a.s - b.s)
      );
      setAllScores(allCountryScores);
      setButtonTitle("High to Low Scores");
    } else {
      allCountryScores.map((country) =>
        country.scores.sort((a, b) => b.s - a.s)
      );
      setAllScores(allCountryScores);
      setButtonTitle("Low to High Scores");
    }
  };

  return (
    <div className="score-data-container">
      <h1>High Scores per Country</h1>
      <button onClick={handleClick}>{buttonTitle}</button>
      {allScores
        .sort((a, b) => a.name > b.name)
        .map((country) => (
          <CountryScoresCard country={country} />
        ))}
    </div>
  );
}

export default App;
