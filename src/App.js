import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

// IMPORT STYLE SHEETS
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';

// IMPORT COMPONETS
import Routes from './component/Routes'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}

export default App;