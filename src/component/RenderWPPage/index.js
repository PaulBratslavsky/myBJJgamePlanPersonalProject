import React, { Component } from 'react'
import ReactHtmlParser from 'react-html-parser';
import { Link } from "react-router-dom";


import Header from '../Header';
import Comments from '../Comments';

export default class RenderWPPage extends Component {
  state={
    url: "https://bjjandfriends.com/wp-json/wp/v2/pages/369",
    data: {},
    routeUrl: "https://bjjandfriends.com/letstalk"
  }
  componentDidMount() {
    this.getDataFromApi();
  }

  // MAKES FETCH REQUEST AND GETS DATA FROM THE WP REST API
  async getDataFromApi() {
    const response = await fetch(this.state.url);
    const jsonData = await response.json();
    
    this.setState(()=>{
      return{
        data: jsonData,
        pageContent: ReactHtmlParser(jsonData.content.rendered),
        pageTitle: ReactHtmlParser(jsonData.title.rendered),
        pageVideo: ReactHtmlParser(jsonData.acf.pagevideo),
        pageId: jsonData.id

      }
    }, () => { console.log(this.state.data, 'from api call')});
  }

  render() {

    return (
      <React.Fragment>
        <Header />
        <div className="videos container marg-54">
        <div className="video">
          <div className="videoWrapper">
            {this.state.pageVideo}
          </div>
          <div className="content">
            <h1>{this.state.pageTitle}</h1>
            {this.state.pageContent}
            <Link style={{marginBottom: '15px'}} className="btn btn-primary" to={'/videolist'}>Go To Videos</Link>
          </div>
          <Comments url={this.state.routeUrl} id={this.state.pageId} title={this.state.pageTitle} />
        </div>
      </div>
      </React.Fragment>
    )
  }
}


