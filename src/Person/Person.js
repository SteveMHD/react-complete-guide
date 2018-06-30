import React from 'react';
import './Person.css';

const person = (props) => {
  const { click, name, age, nameChange, children } = props;

  return(
    <div className="Person">
      <p onClick={click}>My name is {name} and I'm {age} years old.</p>
      <p>{children}</p>
      <input type="text" onChange={nameChange} value={name}/>
    </div>

  )
};

export default person;