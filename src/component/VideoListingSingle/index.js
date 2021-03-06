import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link } from "react-router-dom";

import { processVideoUrl } from '../ProcessVideoUrl';

export default class VideoListSingle extends Component {
  render() {

    const {
      id,
      acf,
      excerpt,
      title,
    } = this.props.item;

    console.log(this.props, "from video list single")

    const postVideo = ReactHtmlParser(acf.bjj_video);
    const postTitle = ReactHtmlParser(title.rendered);
    const postMoves = ReactHtmlParser(acf.moves);
    const postOptions = ReactHtmlParser(acf.options);
    const postTags = ReactHtmlParser(acf.tags);
    const postExcerpt = ReactHtmlParser(excerpt.rendered);
    const postVideoUrl = acf.video_url;
    
    console.log(postVideoUrl, "Should be video url to use for post");
    return (
        
        <div className="video">
          <header className="video-header">
            <h2 className="text-uppercase">{postTitle}</h2>
          </header>

          <div className="videoWrapper">
            <iframe 
              width="560" 
              height="315" 
              src={processVideoUrl(postVideoUrl)}
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
          
          <div className="content">
            <div className="tags-container">
              { ( acf.moves != null && acf.moves != '' ) && <small onClick={ () => this.props.filterDataByMoves(acf.moves) }>{postMoves}</small> }
              { ( acf.options != null && acf.options != '' ) && <small onClick={ () => { this.props.filterDataByOption(acf.options)} }>{postOptions}</small> }
              { ( acf.tags != null && acf.tags != '' ) && <small onClick={ () => { this.props.filterDataByTag(acf.tags)} }>{postTags}</small> }
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