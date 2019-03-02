import React, { Component } from 'react'
import './createvideo.scss';
export default class CreateVideoPost extends Component {
  state={
    videoUrl: '',
    videoTags: '',
    videoTitle: '',
    videoDescription: '',
    dataObject: {},
    jsonData: ''
  }

  onChangeVideoUrl = (e) => {
    this.setState({
      videoUrl: e.target.value
    })
  }

  onChangeVideoTags = (e) => {
    this.setState({
      videoTags: e.target.value
    })
  }

  onChangeVideoTitle = (e) => {
    this.setState({
      videoTitle: e.target.value
    })
  }

  onChangeVideoDescription = (e) => {
    this.setState({
      videoDescription: e.target.value
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    const dataObject = {
      title: this.state.videoTitle,
      content: this.state.videoDescription,
      tags: this.state.videoTags,
      video_url: this.state.videoUrl
    }

    const jsonData = JSON.stringify(dataObject);
    
    this.setState({
      dataObject: dataObject,
      jsonData: jsonData,
      videoUrl: '',
      videoTags: '',
      videoTitle: '',
      videoDescription: '',
    });
  }


  render() {

    console.log(this.state.dataObject);
    console.log(this.state.jsonData);

    return (
      <div className="container">
        <form onSubmit={this.handleFormSubmit} className="main-content" style={{display: "flex", flexDirection: "column"}}>
          <h2>Lets add a video</h2>
          <input onChange={this.onChangeVideoTitle} type="text" placeholder="Add video title" value={this.state.videoTitle} />
          <input onChange={this.onChangeVideoDescription} type="textarea" placeholder="Add video descriptions..." value={this.state.videoDescription} />
          <input onChange={this.onChangeVideoUrl}type="text" placeholder="Add video url..." value={this.state.videoUrl} />
          <input onChange={this.onChangeVideoTags}type="text" placeholder="Add video tags seperate with comma..." value={this.state.videoTags} />
          <button type="submit">Submit</button>
        </form>

      </div>
    )
  }
}



