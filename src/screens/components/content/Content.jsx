import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  DashBoardAsync,
  Error404Async,
  ProfileAsync
} from './../../../modules';

class Content extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ DashBoardAsync } />
        <Route exact path="/profile" component={ ProfileAsync } />
        <Route component={ Error404Async } />
      </Switch>
    );
  }
}

export default Content;