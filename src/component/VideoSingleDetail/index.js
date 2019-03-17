import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link } from "react-router-dom";
import { processVideoUrl } from '../ProcessVideoUrl';

// IMPORT COMPONENTS
import Header from '../Header';
import Comments from '../Comments'

export default class VideoSingleDetails extends Component {
  state = {
    data: {},
    showComments: false,
    commentButton: 'Comment'
  }

  async componentDidMount() {
    const currentPost = this.props.match.params.id;
    try {
        const data = await fetch(`https://bjjandfriends.com/wp-json/wp/v2/mybjjgameplan/${currentPost}`);
        const jsonData = await data.json();
        /* You can define the object and set it to state */

        const postVideoUrl = jsonData.acf.video_url;
        const postVideo = ReactHtmlParser(jsonData.acf.bjj_video);
        const postTitle = ReactHtmlParser(jsonData.title.rendered);
        const postMoves = ReactHtmlParser(jsonData.acf.moves);
        const postOptions = ReactHtmlParser(jsonData.acf.options);
        const postTags = ReactHtmlParser(jsonData.acf.tags);
        const postContent = ReactHtmlParser(jsonData.content.rendered);
        const postLink = jsonData.link;

        const finalUrl = processVideoUrl(postVideoUrl);


        this.setState({
        id: jsonData.id,
        title: postTitle,
        content: postContent,
        video: postVideo,
        moves: postMoves,
        options: postOptions,
        tags: postTags,
        link: postLink,
        url: currentPost,
        videoUrl: finalUrl
        });
    } catch(error) {
      console.log(error, 'Failed in loading Json ');
    }
  }

  handleTuggleComments= () => {
    console.log('tuggle menu clicked');
    if ( this.state.showComments === false ) {
      this.setState({
        showComments: true,
        commentButton: 'Hide'
      });
    } else {
      this.setState({
        showComments: false,
        commentButton: 'Comment'
      });
    }
  }

  
  render() {
    const serverRootUrl = 'http://mybjjgameplan.com';
    const routeUrl = `${serverRootUrl}/videopost/${this.state.id}`;

    console.log(this.state.videoUrl, "why is this undifined?");


    return (
      <React.Fragment>
        <Header />
        <div className="videos container marg-54">
        <div className="video">
          <header className="video-header">
            <h2 className="text-uppercase">{this.state.title}</h2>
          </header>

          <div className="videoWrapper">
            <iframe 
              width="560" 
              height="315" 
              src={this.state.videoUrl}
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
            
          <div className="content">
          <div className="tags-container">
              { ( this.state.moves != null && this.state.moves != '' ) && <small>{this.state.moves}</small> }
              { ( this.state.options != null && this.state.options != '' ) && <small>{this.state.options}</small> }
              { ( this.state.tags != null && this.state.tags != '' ) && <small>{this.state.tags}</small> }
            </div>
            <div>{this.state.content}</div>
          </div>
          
          <footer className="video-footer">
            <Link className="btn btn-primary" to={`/videolist`} >Back</Link><button onClick={this.handleTuggleComments} className="btn btn-primary">{this.state.commentButton}</button>
          </footer>
          <div>
            { this.state.showComments && <Comments url={routeUrl} id={this.state.id} title={this.state.title} /> }
          </div>
        </div>    
        </div>
      </React.Fragment>
    )
  }

}






  