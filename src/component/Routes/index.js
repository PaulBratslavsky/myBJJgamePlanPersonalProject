import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

// IMPORT COMPONENTS 
import Layout from '../Layout';
import Home from '../Home';
import VideoList from '../VideoList';
import VideoSingleDetail from '../VideoSingleDetail';

export default class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/videolist" component={VideoList} />
          <Route path="/videopost/:id" component={VideoSingleDetail} />
        </Switch>
      </Layout>
    )
  }
}
