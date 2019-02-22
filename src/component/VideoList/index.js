import React, { Component } from 'react'
import VideoListSingle from '../VideoListingSingle';

export default class VideoList extends Component {
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
  render() {

    const data = this.state.data;
    console.log(this.state.data, "Where are the props")
  
    return (
      <div className="container videos marg-54">
          { 
            data.map( item => <VideoListSingle key={item.id} item={item} />) 
          }
      </div>
    )
  }
}

