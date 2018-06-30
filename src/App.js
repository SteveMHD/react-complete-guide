import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 25 },
      { id: '3', name: 'Jackson', age: 2 },
    ],
    showPeople: false
  };

  nameChangedHandler = (event, personID) => {
    const personIndex = this.state.persons.findIndex(p => {
       return p.id === personID;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
    
  };

  deletePersonHandler = (index) => {
    const persons = this.state.persons;
    persons.splice(index ,1);
    this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({
      showPeople: !doesShow
    })
  };

  render() {

    let persons = null;
    let btnClass = '';

    if(this.state.showPeople) {
      btnClass = classes.Red;
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                nameChange={(event) => this.nameChangedHandler(event, person.id)}
                click={() => this.deletePersonHandler(index)}
              />
            )
          })}
        </div>
      )
    }

    const classes2 = [];
    if (this.state.persons.length <= 2) {
      classes2.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      classes2.push(classes.bold);
    }

    return (

        <div className={classes.App}>
          <h1>Hi, I'm a react app</h1>
          <p className={classes2.join(' ')}>This is really working!!</p>
          <button
            className={btnClass}
            onClick={this.togglePersonsHandler}>Toggle Persons
          </button>
          {persons}
        </div>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi dudes'));
  }
}

export default App;
