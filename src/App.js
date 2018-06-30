import React, { Component } from 'react';
import './App.css';
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
    let style = {
      backgroundColor: 'green',
      font: 'inherit',
      color: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if(this.state.showPeople) {
      style.backgroundColor = 'red';

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

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (

        <div className="App">
          <h1>Hi, I'm a react app</h1>
          <p className={classes.join(' ')}>This is really working!!</p>
          <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons
          </button>
          {persons}
        </div>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi dudes'));
  }
}

export default App;
