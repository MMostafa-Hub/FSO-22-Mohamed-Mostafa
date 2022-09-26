import { useState } from "react";

// Person object equality tests
const isSamePerson = (object, other) =>
  object.name === other.name && object.number === other.number;

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [PersonsToShow, setPersonsToShow] = useState(persons);
  const [personSearch, setPersonSearch] = useState("");

  const handleDataChange = (set) => (event) => {
    set(event.target.value);
  };

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

  const searchPhoneBook = (event) => {
    event.preventDefault();

    let personName = event.target.value;
    if (personName === "") setPersonsToShow(persons);
    else {
      setPersonsToShow(
        persons.filter((persons) => persons.name === personName)
      );
    }
    setPersonSearch(personName);
  };
  return (
    <>
      <h2>Phonebook</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <p>filter shown with</p>
        <input value={personSearch} onChange={searchPhoneBook} />
      </form>
      <h2>Add New Person</h2>
      <form onSubmit={addPerson}>
        <div>
          name:{" "}
          <input value={newName} onChange={handleDataChange(setNewName)} />
        </div>
        <div>
          number:{" "}
          <input value={newNumber} onChange={handleDataChange(setNewNumber)} />
        </div>
        <button type="submit">Add</button>
      </form>

      <h2>Numbers</h2>
      <div>
        {PersonsToShow.map((person, index) => (
          <p key={index}>
            {person.name} {person.number}
          </p>
        ))}
      </div>
    </>
  );
};

export default App;
