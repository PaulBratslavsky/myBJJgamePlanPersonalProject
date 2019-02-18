import React, { Component } from 'react'
import Search from './Search';

export default class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <nav className="navbar fixed-top navbar-dark bg-dark">
          {/*<a className="navbar-brand" href="#">Navbar</a>*/}
          <Search />
        </nav>
      </header>


    )
  }
}
