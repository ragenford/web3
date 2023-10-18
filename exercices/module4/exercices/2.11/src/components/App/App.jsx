import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };
    const nameExist = persons.find((person) => person.name === newName)
      ? alert(newName + " is already added to phonebook")
      : setPersons(persons.concat(newPerson));
    setNewName("");
    setNewNumber("");
  };
  const handlePersonChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          {persons.map((person) => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
