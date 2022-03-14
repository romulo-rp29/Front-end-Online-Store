import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemCart extends Component {
  render() {
    const { productName, productQuantity } = this.props;
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{productName}</p>
        <p data-testid="shopping-cart-product-quantity">{productQuantity}</p>
      </div>
    );
  }
}
ItemCart.propTypes = {
  productName: PropTypes.string.isRequired,
  productQuantity: PropTypes.number.isRequired,
};

export default ItemCart;
