import React from "react";

const SearchForm = ({
  personSearch,
  setPersonSearch,
  setPersonsToShow,
  persons,
}) => {
  const searchPhoneBook = (event) => {
    event.preventDefault();

    let personName = event.target.value;
    if (personName === "") setPersonsToShow(persons);
    else {
      setPersonsToShow(
        persons.filter((person) =>
          person.name.toLowerCase().match(personName.toLowerCase())
        )
      );
    }
    setPersonSearch(personName);
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <p>filter shown with</p>
      <input value={personSearch} onChange={searchPhoneBook} />
    </form>
  );
};

export default SearchForm;
