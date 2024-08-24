import { useState, useEffect } from "react";
import personsService from "./services/persons";
import { Filter, PersonForm, Persons } from "./components";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    personsService
      .getAllPersons()
      .then((initialPersons) => {
        setPersons(initialPersons);
      })
      .catch((error) => {
        alert("Error fetching data: ", error);
      });
  }, [persons]);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setNewPhone(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      if (
        window.confirm(
          `${newName} is already added to the phonebook, replace the old number with a new one?`
        )
      ) {
        const person = persons.find((person) => person.name === newName);
        const changedPerson = { ...person, number: newPhone };

        personsService
          .updatePerson(person.id, changedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== returnedPerson.id ? person : returnedPerson
              )
            );
            setNewPhone("");
            setNewName("");
          })
          .catch((error) => {
            alert(`Error updating person: ${error}`);
          });
      }
      setNewPhone("");
      setNewName("");
      return;
    }

    const newPerson = {
      name: newName,
      number: newPhone,
    };

    personsService
      .createPerson(newPerson)
      .then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewPhone("");
        setNewName("");
      })
      .catch((error) => {
        alert(`Error creating person: ${error}`);
      });
  };

  return (
    <>
      <h2>Phonebook</h2>

      <Filter searchTerm={searchTerm} handleSearchChange={handleSearchChange} />

      <h2>add new</h2>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newPhone={newPhone}
        handleNameChange={handleNameChange}
        handlePhoneNumberChange={handlePhoneNumberChange}
      />

      <h2>Numbers</h2>

      <Persons
        persons={persons}
        searchTerm={searchTerm}
        setPersons={setPersons}
      />
    </>
  );
};

export default App;
