import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartButton extends Component {
  render() {
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">
          <button type="button">Carrinho</button>
        </Link>
      </div>
    );
  }
}

export default CartButton;
