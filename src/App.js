import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:'a1', name: 'Max', age: 28},
      { id:'a2', name: 'Manu', age: 29},
      { id:'a3', name: 'Stephanie', age:24}
    ],
    showPersons: false
  };

  nameChangeHandler = ( event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {
      persons: persons
    } );
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doseShow = this.state.showPersons;
    this.setState({
      showPersons: !doseShow
    })
  }
  
  render(){
    let persons = null;
    if( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div> 
      );
    }

    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }

    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>I am a React APP</h1>
        <p className={classes.join(' ')}> This is really working</p>
        <button className="button" onClick={this.togglePersonHandler}>
          Toggle Persons
        </button>
       {persons}
      </div>
    );
  }

}

// const App = props => {
  
//   const style = {
//     backgroundColor: 'white',
//     font: 'inherit',
//     border: '1px solid blue',
//     padding: '8px',
//     cursor: 'pointer'
//   };

//   const [ personState, setPersonState ] = useState({
//     persons: [
//       { name: 'Max', age: 28},
//       { name: 'Manu', age: 29},
//       { name: 'Stephanie', age:24}
//     ]
//   });
  
//   const [ showPersonsState, setShowPersonsState ] = useState({
//     showPersons: false
//   })


//   const switchNameHandler = (newName) => {
//     setPersonState( {
//       persons: [
//         { name: newName, age: 28},
//         { name: 'Manu', age: 29},
//         { name: 'Stephanie', age:24}
//       ]
//     } );
//   }

//   const nameChangeHandler = (event) => {
//     setPersonState( {
//       persons: [
//         { name: 'Max', age: 28},
//         { name: event.target.value, age: 29},
//         { name: 'Stephanie', age:24}
//       ]
//     } );
//   }

//   const togglePersonHandler = () => {
//     const doseShow = showPersonsState.showPersons;
//     setShowPersonsState({
//       showPersons: !doseShow
//     })
//   } 
  
  
//   return (
//     <div className="App">
//       <h1>I am a React APP</h1>
//       <button 
//         style={style}
//         onClick={togglePersonHandler}>Switch Name</button>
//       { 
//         showPersonsState.showPersons ?
//           <div>
//             <Person 
//               name={personState.persons[0].name} 
//               age={personState.persons[0].age}/>
//             <Person 
//               name={personState.persons[1].name} 
//               age={personState.persons[1].age}
//               changed={nameChangeHandler} />
//             <Person 
//               name={personState.persons[2].name} 
//               age={personState.persons[2].age} 
//               click={switchNameHandler.bind(this, 'Maximilian')} >My additionl note in child component</Person>
//           </div> : null
//       }
//     </div>
//   );
// }



/********This is the first code ********/
// function App() {
//   return (
//     <div className="App">
//       <h1>I am a React APP</h1>
//     </div>
//   );
// }

export default App;
