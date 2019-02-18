import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

export default class VideoListSingle extends Component {
  render() {

    const {
      id,
      acf,
      excerpt,
      title,
    } = this.props.item;

    const postVideo = ReactHtmlParser(acf.bjj_video);
    const postTitle = ReactHtmlParser(title.rendered);
    const postOptions = ReactHtmlParser(acf.options);
    const postTags = ReactHtmlParser(acf.tags);
    const postExcerpt = ReactHtmlParser(excerpt.rendered);

    return (
      <div className="card">
        <h2>{postTitle}</h2>
        <div className="videoWrapper">{postVideo}</div> 
        <span><small>{postOptions}</small><small>{postTags}</small></span> 
        <div>{postExcerpt}</div>
        <div>
          <button className="btn btn-success">Details</button>
          <button className="btn btn-primary">Save</button>
        </div>
      </div>    
    )
  }
}
