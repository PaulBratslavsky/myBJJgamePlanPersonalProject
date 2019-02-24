import React, { Component } from 'react'
import VideoListSingle from '../VideoListingSingle';

// IMPORT COMPONETS
import Header from '../Header';

export default class VideoList extends Component {
  state = {
    url: "https://bjjandfriends.com/wp-json/wp/v2/mybjjgameplan",
    data: [],
    originalData: [],
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
        data: data,
      }
    }, () => { console.log(this.state.data, 'from api call')});
  }

  filterDataByTag = (tag) => {
    const data = this.state.data;

    const filteredArray = data.filter( ( item ) => {
      if ( item.acf.tags === tag) {
        return item;
      }
    })
    console.log(filteredArray, 'from function');
    
    this.setState({
      data:filteredArray
    })
    
  }

  filterDataByOption = (options) => {
    const data = this.state.data;

    const filteredArray = data.filter( ( item ) => {
      if ( item.acf.options === options) {
        return item;
      }
    })
    console.log(filteredArray, 'from function');
    
    this.setState({
      data:filteredArray
    }) 

  }

  filterDataByMoves = (moves) => {
    const data = this.state.data;

    const filteredArray = data.filter( ( item ) => {
      if ( item.acf.moves === moves) {
        return item;
      }
    })
    console.log(filteredArray, 'from function');
    
    this.setState({
      data:filteredArray
    }) 

  }


  render() {

    const data = this.state.data;
    return (
      <div>
        <Header />
        <div className="container videos marg-54">
          { 
            data.map( item => <VideoListSingle 
              key={item.id} 
              item={item}
              filterDataByTag={this.filterDataByTag} 
              filterDataByOption={this.filterDataByOption}
              filterDataByMoves={this.filterDataByMoves}
            />) 
          }
      </div>
      </div>
      
    )
  }
}

