import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Search from './Search';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={ Search } />
        </Switch>
      </div>
    );
  }
}

export default Routes;
