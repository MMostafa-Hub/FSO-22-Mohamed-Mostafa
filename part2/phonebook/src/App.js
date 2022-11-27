import { useState, useEffect } from "react";
import AddPersonForm from "./components/AddPersonForm";
import ShowPersons from "./components/ShowPersons";
import SearchForm from "./components/SearchForm";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [PersonsToShow, setPersonsToShow] = useState(persons);
  const [personSearch, setPersonSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
      setPersonsToShow(response.data);
    });
  }, []);

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
