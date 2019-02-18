import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <form style={{width: "100%"}} className="form-inline">
        <div className="input-group" style={{width: "100%"}}>
          <input type="text" className="form-control" placeholder="Search" />
          <div className="input-group-append">
            <button 
              className="input-group-text bg-primary text-white"
              type={"submit"}>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
    </form>
    )
  }
}
