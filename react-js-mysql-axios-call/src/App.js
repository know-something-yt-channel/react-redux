import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RoutesList from './routes';

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Know Something channel...!!!</h1>
        </header>
               
        <RoutesList />
         
      </div>
    );
  }
}
 
 
export default App;
