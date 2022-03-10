import React, { Component } from 'react';

class Cart extends Component {
  render() {
    return (
      <div>
        <button data-testid="shopping-cart-button" type="button">CartButton</button>
        <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
      </div>
    );
  }
}

export default Cart;
