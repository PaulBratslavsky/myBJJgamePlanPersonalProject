import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Comments from './Comments';

export default class VideoSingleDetails extends Component {
  state = {
    data: {}
  }

  async componentDidMount() {
    const currentPost = this.props.pageId;
    try {
        const data = await fetch(`https://bjjandfriends.com/wp-json/wp/v2/mybjjgameplan/${currentPost}`);
        const jsonData = await data.json();
        /* You can define the object and set it to state */

        const postVideo = ReactHtmlParser(jsonData.acf.bjj_video);
        const postTitle = ReactHtmlParser(jsonData.title.rendered);
        const postOptions = ReactHtmlParser(jsonData.acf.options);
        const postTags = ReactHtmlParser(jsonData.acf.tags);
        const postContent = ReactHtmlParser(jsonData.content.rendered);
        const postLink = jsonData.link;



        this.setState({
        id: jsonData.id,
        title: postTitle,
        content: postContent,
        video: postVideo,
        options: postOptions,
        tags: postTags,
        link: postLink,
        url: currentPost 
        });
    } catch(error) {
      console.log(error, 'Failed in loading Json ');
    }
  }

  

  render() {


    console.log("before props", this.state.link, this.props.pageId, this.state.title);
    return (
      <div className="video">
        <header className="video-header">
          <h2 className="text-uppercase">{this.state.title}</h2>
        </header>

        <div className="videoWrapper">
          {this.state.video}
        </div> 
          
        <div className="content">
          <div className="d-flex justify-content-end .flex-wrap">
            <small>{this.state.options}</small><small>{this.state.tags}</small>
          </div>
          <div>{this.state.content}</div>
        </div>
        
        <footer className="video-footer">
          <button onClick={() => this.props.handleIndexChange(1) }className="btn btn-success">Back</button>
          <button className="btn btn-primary" disabled>Comment</button>
        </footer>
        <div>
          <Comments url={this.state.link} id={this.state.id} title={this.state.title} />
        </div>
      </div>    
    )
  }

}






  