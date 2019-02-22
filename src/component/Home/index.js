import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './home.scss';

export default class Home extends Component {
  render() {
    return (
      <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <Link className="btn btn-primary" to={'/videolist'}>Log in</Link>
      </div>
    )
  }
}
