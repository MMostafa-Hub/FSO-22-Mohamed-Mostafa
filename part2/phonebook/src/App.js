import { useState } from "react";
import AddPersonForm from "./components/AddPersonForm";
import ShowPersons from "./components/ShowPersons";
import SearchForm from "./components/SearchForm";

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

  return (
    <>
      <h2>Phonebook</h2>
      <SearchForm
        personSearch={personSearch}
        setPersonSearch={setPersonSearch}
        setPersonsToShow={setPersonsToShow}
        persons={persons}
      />
      <h2>Add New Person</h2>
      <AddPersonForm
        persons={persons}
        setPersons={setPersons}
        setPersonsToShow={setPersonsToShow}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />

      <h2>Numbers</h2>
      <ShowPersons PersonsToShow={PersonsToShow} />
    </>
  );
};

export default App;
