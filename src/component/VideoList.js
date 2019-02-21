import React, { Component } from 'react'
import VideoListSingle from './VideoListSingle';

export default class VideoList extends Component {
  render() {

    const data = this.props.data;
  
    return (
          <div className="videos">
            { 
              data.map( item => <VideoListSingle handleIndexDetails={this.props.handleIndexDetails} key={item.id} item={item} />) 
            }
          </div>
    )
  }
}
