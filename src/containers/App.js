import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

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

    if(this.state.showPeople) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            inputChange={this.nameChangedHandler}
            deleteClick={this.deletePersonHandler}
          />
        </div>
      );
    }

    return (
        <div className={classes.App}>
          <Cockpit
            persons={this.state.persons}
            showPersons={this.state.showPeople}
            click={this.togglePersonsHandler}
          />
          {persons}
        </div>
    );
  }
}

export default App;
