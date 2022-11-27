import React from "react";

const AddPersonForm = ({
  persons,
  setPersons,
  setPersonsToShow,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
}) => {
  // Person object equality tests
  const isSamePerson = (object, other) =>
    object.name === other.name && object.number === other.number;
  // event handle for submitting the form
  const addPerson = (event) => {
    event.preventDefault();

    const newPerson = { name: newName, number: newNumber };

    // Checking if the user already submitted the same person
    if (persons.find((person) => isSamePerson(person, newPerson))) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    setNewName("");
    setNewNumber("");
    let concatPersonsList = persons.concat(newPerson);
    setPersons(concatPersonsList);
    setPersonsToShow(concatPersonsList);
  };

  const handleDataChange = (set) => (event) => {
    set(event.target.value);
  };
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleDataChange(setNewName)} />
      </div>
      <div>
        number:{" "}
        <input value={newNumber} onChange={handleDataChange(setNewNumber)} />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddPersonForm;
