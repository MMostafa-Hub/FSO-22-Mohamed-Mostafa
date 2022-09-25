import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  // event handler for typing data in the input field
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  // event handle for submitting the form
  const addPerson = (event) => {
    event.preventDefault();

    const newPerson = { name: newName };

    setNewName("");
    setPersons(persons.concat(newPerson));
  };

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        name: <input value={newName} onChange={handleNameChange} />
        <button type="submit">Add</button>
      </form>

      <h2>Numbers</h2>
      <div>
        {persons.map((person, index) => (
          <p key={index}>{person.name}</p>
        ))}
      </div>
    </>
  );
};

export default App;
