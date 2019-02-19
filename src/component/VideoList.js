import React, { Component } from 'react'
import VideoListSingle from './VideoListSingle';
import VideoSingleDetails from './VideoSingleDetails';

export default class VideoList extends Component {
  render() {

    const data = this.props.data;

    return (
      <div className="container">
        <div className="marg-54">
          <div className="videos">
            { 
              data.map( item => <VideoListSingle key={item.id} item={item} />) 
            }
          </div>
        </div>

        <div className="">
          <div className="text-center">
            <VideoSingleDetails />
          </div>
        </div>
      </div>
    )
  }
}
