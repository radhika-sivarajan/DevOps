import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dcComics from './dc_comics.png';
import { BrowserRouter, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="column">
          <p>Welcome to the Heros application</p>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>
        <div className="column">
          <img src={dcComics} alt="DC comics" />
        </div>
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    );
  }
}

export default App;
