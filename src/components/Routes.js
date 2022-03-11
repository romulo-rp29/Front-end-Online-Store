import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Home from '../pages/Home';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Home } />
        </Switch>
      </div>
    );
  }
}

export default Routes;
