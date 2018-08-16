import React, { Component } from 'react';
import './App.css';
import Person from './person/person';

class App extends Component {
  
  state = {
    person:[
      {name:'Max', age:23},
      {name:'John', age:24},
      {name:'Lesley', age:29}
    ],
    other: 'other State'
  }

  SwithNameHandler = (newName) => {
    this.setState({
      person:[
        {name:newName, age:23},
        {name:'John', age:24},
        {name:'Lesley', age:19}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      person:[
        {name:'Max', age:23},
        {name:event.target.value, age:24},
        {name:'Lesley', age:19}
      ]
    })
  }  

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    }

    return (      
      <div className="App">
        <h1>Hi, I am a first React App.</h1>
        <button style={style}
            onClick={this.SwithNameHandler.bind(this, 'Maximilian')}>Switch Name</button>
        <Person name = {this.state.person[0].name} age = {this.state.person[0].age}></Person>
        <Person name = {this.state.person[1].name} 
            age = {this.state.person[1].age}
            click={this.SwithNameHandler.bind(this, 'Max!')}
            change={this.nameChangedHandler}>My hobby is racing.</Person>
        <Person name = {this.state.person[2].name} age = {this.state.person[2].age}></Person>
      </div>
      // React.createElement('div', {className:'App'}, React.createElement('h1', null, 'I\'m a Student'))
    );
  }
}

export default App;
