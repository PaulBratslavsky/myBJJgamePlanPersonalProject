import React, { Component } from 'react'
import Search from './Search';

export default class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <nav className="navbar sticky-top navbar-light bg-light">
          {/*<a className="navbar-brand" href="#">Navbar</a>*/}
          <Search />
        </nav>
      </header>


    )
  }
}
