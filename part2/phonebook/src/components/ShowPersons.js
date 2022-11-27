import React from "react";

const ShowPersons = ({ PersonsToShow }) => (
  <div>
    {PersonsToShow.map((person, index) => (
      <p key={index}>
        {person.name} {person.number}
      </p>
    ))}
  </div>
);

export default ShowPersons;
