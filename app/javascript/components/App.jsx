import React, { Component } from 'react';
import Menu from './Menu';
import Routes from './Routes';
import {HashRouter as Router} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Menu />
          <div className="container">
            <Routes />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;