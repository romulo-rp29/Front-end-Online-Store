import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import PropTypes from 'prop-types';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';

class Routes extends Component {
  render() {
    const { addCart, cartItems } = this.props;
    return (
      <Switch>
        <Route exact path="/" render={ () => <Home addCart={ addCart } /> } />
        <Route exact path="/cart" render={ () => <Cart cartItems={ cartItems } /> } />
        <Route
          exact
          path="/productdetails/:id"
          render={ (props) => <ProductDetails { ...props } /> }
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
