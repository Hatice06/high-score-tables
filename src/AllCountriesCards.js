
import React from "react";
import CountryScoresCard from "./CountryScoresCard";

const AllCountriesCard = (props) => {
  return (
    <div className="score-data-container">
      <h1>High Scores per Country</h1>
      {props.allCountryScores
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map((country) => (
          <CountryScoresCard country={country} />
        ))}
    </div>
  );
};

export default AllCountriesCard;