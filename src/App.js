import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './NavBar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
