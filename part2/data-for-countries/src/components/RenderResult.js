import React from "react";

// this component renders the result of the search
export const RenderResult = ({ countriesToShow }) => {
  if (countriesToShow.length >= 10) {
    return <p>Too many matches specify another filter</p>;
  }
  // return the list of countries if the length is less than 10
  else if (countriesToShow.length < 10 && countriesToShow.length > 1) {
    return (
      <ul>
        {countriesToShow.map((country) => (
          <li key={country.name.common}>{country.name.common}</li>
        ))}
      </ul>
    );
  }
  // return the details of the country if the length is 1
  else if (countriesToShow.length === 1) {
    const country = countriesToShow[0];
    return (
      <>
        <h1>{country.name.common}</h1>
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>
        <h2>languages</h2>
        <ul>
          {Object.values(country.languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt="flag" width="100" />
      </>
    );
  }
};
