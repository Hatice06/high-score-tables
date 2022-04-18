import React from "react";

const CountryScoresCard = (props) => {
  return (
    <div className="country-score-card">
      <p>HIGH SCORES: {props.country.name} </p>
      <div className="card-info">
        {props.country.scores.map((person) => (
          <div>
            <div className="person-data">
              <span className="person-name">{person.n.toUpperCase()}</span>
              <span className="person-score">{person.s}</span>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryScoresCard;
