import personsService from "../services/persons";

export const Persons = ({ persons, searchTerm, setPersons }) => {
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteButton = (name, id) => {
    if (window.confirm(`Delete ${name}?`)) {
      personsService
        .deletePerson(id)
        .then(() => {
          setPersons((prevPersons) =>
            prevPersons.filter((person) => person.id !== id)
          );
        })
        .catch((error) => {
          console.error("Error deleting person:", error);
        });
    }
  };

  return (
    <>
      {filteredPersons.map(({ id, name, number }) => (
        <div key={id}>
          <div key={id}>
            {name} {number}
          </div>

          <button onClick={() => handleDeleteButton(name, id)}>delete</button>
        </div>
      ))}
    </>
  );
};
