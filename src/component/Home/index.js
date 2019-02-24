import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './home.scss';

export default class Home extends Component {
  render() {
    return (
      <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <Link style={{marginBottom: '15px'}} className="btn btn-primary" to={'/videolist'}>Log In</Link>
        <Link className="btn btn-success" to={'/letstalk'}>Let's Talk</Link>
      </div>
    )
  }
}
