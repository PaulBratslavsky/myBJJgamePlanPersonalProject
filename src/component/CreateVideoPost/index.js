import React, { Component } from 'react'
import './createvideo.scss';
export default class CreateVideoPost extends Component {
  state={
    videoUrl: '',
    videoTags: '',
    videoTitle: '',
    videoDescription: '',
    userId: '',

  }
  render() {
    return (
      <div className="container">
        <form className="main-content" style={{display: "flex", flexDirection: "column"}}>
          <h2>Lets add a video</h2>
          <input type="text" placeholder="Add video title" value={this.state.videoTitle} />
          <input type="textarea" placeholder="Add video descriptions..." value={this.state.videoDescription} />
          <input type="text" placeholder="Add video url..." value={this.state.videoUrl} />
          <input type="text" placeholder="Add video tags seperate with comma..." value={this.state.videoTags} />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}



