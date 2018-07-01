import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
  const { showPersons, persons, click } = props;
  const classes2 = [];
  const btnClass = showPersons ? classes.Red : '';

  if (persons.length <= 2) {
    classes2.push(classes.red);
  }

  if (persons.length <= 1) {
    classes2.push(classes.bold);
  }



  return(
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a react app</h1>
      <p className={classes2.join(' ')}>This is really working!!</p>
      <button
        className={btnClass}
        onClick={click}>Toggle Persons
      </button>
    </div>
  )
};

export default cockpit;