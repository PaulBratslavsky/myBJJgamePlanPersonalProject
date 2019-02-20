import React, { Component } from 'react'
import VideoListSingle from './VideoListSingle';

export default class VideoList extends Component {
  render() {

    const data = this.props.data;
  
    return (
          <div className="videos">
            { 
              data.map( item => <VideoListSingle key={item.id} item={item} />) 
            }
          </div>
    )
  }
}
