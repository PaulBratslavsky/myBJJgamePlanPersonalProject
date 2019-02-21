import React, { Component } from 'react';
import './App.scss';
import Header from './component/Header';
import VideoList from './component/VideoList';
import VideoSingleDetails from './component/VideoSingleDetails';

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  state = {
    url: "https://bjjandfriends.com/wp-json/wp/v2/mybjjgameplan",
    data: [],
    pageIndex: 1,
    pageId: ''
  }

  componentDidMount() {
    this.getDataFromApi();
  }

  // MAKES FETCH REQUEST AND GETS DATA FROM THE WP REST API
  async getDataFromApi() {
    const response = await fetch(this.state.url);
    const data = await response.json();
    
    this.setState(()=>{
      return{
        data: data
      }
    }, () => { console.log(this.state.data, 'from api call')});
  }

  handleIndexChange = (index) => {
    this.setState({
      pageIndex: index
    })
  }

  handleIndexDetails = (index, id) => {
    console.log("Button Clicked")
    this.setState({
      pageIndex: index,
      pageId: id
    });
  }

  handleShowContent = (index) => {
    switch (index) {
      default:
      case 1: 
        return(<VideoList data={this.state.data} handleIndexDetails={this.handleIndexDetails}/>);
      case 0: 
        return(
          <div className="videos">
            <VideoSingleDetails pageId={this.state.pageId} handleIndexChange={this.handleIndexChange}/>  
          </div>
        );
    }
  }

  render() {
    return (
      <div className="main-app">
        <Header />
          <div className="container">
            <div className="marg-54">
              {this.handleShowContent(this.state.pageIndex)}
            </div>
          </div>
      </div>
    );
  }
}

export default App;
