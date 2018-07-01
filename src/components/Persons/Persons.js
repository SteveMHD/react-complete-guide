import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) => {
    return (
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
        nameChange={(event) => props.inputChange(event, person.id)}
        click={() => props.deleteClick(index)}
      />
    )
  });

export default persons;