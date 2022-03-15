import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartButton extends Component {
  cartSize = () => {
    const { cartItems } = this.props;
    if (cartItems.length === 0) return 0;
    const items = cartItems.reduce((acc, curr) => acc + curr.qtd, 0);
    return items;
  }

  render() {
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">
          <button
            data-testid="shopping-cart-size"
            type="button"
          >
            🛒
            <span>{this.cartSize()}</span>

          </button>
        </Link>
      </div>
    );
  }
}

CartButton.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default CartButton;
