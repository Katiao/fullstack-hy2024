export const Persons = ({ persons, searchTerm }) => {
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {filteredPersons.map(({ id, name, number }) => (
        <p key={id}>
          {name} {number}
        </p>
      ))}
    </>
  );
};
