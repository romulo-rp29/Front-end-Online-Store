import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemCart from '../components/ItemCart';

class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    return !cartItems.length ? (
      <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
    ) : (
      <div>
        {cartItems.map((item, index) => (
          <ItemCart
            key={ index }
            productName={ item.title }
            productQuantity={ item.qtd }
          />
        ))}
      </div>
    );
  }
}
Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      qtd: PropTypes.number,
    }),
  ).isRequired,
};
export default Cart;
