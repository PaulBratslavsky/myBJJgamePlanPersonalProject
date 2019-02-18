import React, { Component } from 'react'
import Search from './Search';

export default class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <Search />
      </header>
    )
  }
}
