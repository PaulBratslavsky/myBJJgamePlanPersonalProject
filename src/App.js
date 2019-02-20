import React, { Component } from 'react';
import './App.scss';
import Header from './component/Header';
import VideoList from './component/VideoList';
import VideoSingleDetails from './component/VideoSingleDetails';

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  state = {
    url: "https://bjjandfriends.com/wp-json/wp/v2/mybjjgameplan",
    data: []
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

  render() {
    const data = this.state.data;
    return (
      <div className="main-app">
        <Header />
          <div className="container">
            <div className="marg-54">
              {/*<VideoList data={data}/>*/}
              <div className="videos">
                <VideoSingleDetails/>  
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
