import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';

class Routes extends Component {
  render() {
    const { addCart, cartItems } = this.props;
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={ () => (<Home
            addCart={ addCart }
            cartItems={ cartItems }
          />) }
        />
        <Route exact path="/cart" render={ () => <Cart cartItems={ cartItems } /> } />
        <Route
          exact
          path="/productdetails/:id"
          render={ (props) => (<ProductDetails
            { ...props }
            addCart={ addCart }
            cartItems={ cartItems }
          />) }
        />
      </Switch>
    );
  }
}
Routes.propTypes = {
  addCart: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      qtd: PropTypes.number,
    }),
  ).isRequired,
};

export default Routes;
