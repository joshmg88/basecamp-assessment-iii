import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Coffee/>
        <Cream/>
        <Sugar/>

      </div>
    );
  }
}

class Coffee extends Component {
  render() {
    const num = Math.floor(Math.random() * 6)
    return (<h1>{num}</h1> 

    )
  }
}

class Cream extends Component {
  render() {
    const name = 'Josh Miears-Gallagher';
    
    return (
      <h1>'Hello, {name}!'</h1>
    )
  }
}

class Sugar extends Component {
  render() {
    function formatName(user) {
      return user.firstName + '' + user.lastName;
    }
    const user = {
      firstName: 'Josh',
      lastName: ' Miears-Gallagher'
    }

    return (
      <h1>Hello, {formatName(user)}!</h1>
    );
  }
}
export default App;
