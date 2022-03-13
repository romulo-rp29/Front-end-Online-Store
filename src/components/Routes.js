import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/cart" component={ Cart } />
          <Route
            exact
            path="/productdetails/:id"
            render={ (props) => <ProductDetails { ...props } /> }
          />
        </Switch>
      </div>
    );
  }
}

export default Routes;
