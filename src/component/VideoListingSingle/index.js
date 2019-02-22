import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

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
        <div className="video">
          <header className="video-header">
            <h2 className="text-uppercase">{postTitle}</h2>
          </header>

          <div className="videoWrapper">{postVideo}</div> 
          
          <div className="content">
            <div className="d-flex justify-content-end .flex-wrap">
              <small>{postOptions}</small><small>{postTags}</small>
            </div>
            <div>{postExcerpt}</div>
          </div>
          
          <footer className="video-footer">
            <Link className="btn btn-primary" to={`videopost/${id}`}>Details</Link>
            <button className="btn btn-primary" disabled>Save</button>
          </footer>
        </div>    
    )
  }
}