import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dcComics from './dc_comics.png';

function home() {
  return (
    <div>
      Home
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="column">
          <p>Welcome to the Heros application</p>
        </div>
        <div className="column">
          <img src={dcComics} alt="DC comics" />
        </div>
      </div>
    );
  }
}

export default App;
