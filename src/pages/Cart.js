import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemCart from '../components/ItemCart';

class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        { cartItems ? cartItems.map((item, index) => (<ItemCart
          key={ index }
          productName={ item.title }
          productQuantity={ item.qtd }
        />)) : <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>}
      </div>
    );
  }
}
Cart.propTypes = {
  cartItems: PropTypes.shape({
    title: PropTypes.string,
    qtd: PropTypes.number,
  }).isRequired,
};
export default Cart;
