import React, { Component } from 'react'
import VideoListSingle from './VideoListSingle';
import VideoSingleDetails from './VideoSingleDetails';

export default class VideoList extends Component {
  render() {
    return (
      <header className="main-video-list">
        <h2>Hello From Video List</h2>
        <VideoListSingle />
        <VideoSingleDetails />
      </header>
    )
  }
}
