import React, { Component } from 'react'

// IMPORT COMPONETS
import Header from '../Header';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}
