import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemCart from '../components/ItemCart';

class Cart extends Component {
  constructor() {
    super();

    this.state = {
      totalPrice: 0,
    };
  }

  handleTotalPrice = (price) => {
    this.setState((prevState) => ({
      totalPrice: prevState.totalPrice + price,
    }));
  }

  render() {
    const { cartItems } = this.props;
    const { totalPrice } = this.state;
    return !cartItems.length ? (
      <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
    ) : (
      <div>
        {cartItems.map((item, index) => (
          <ItemCart
            key={ index }
            productName={ item.title }
            productQuantity={ item.qtd }
            productPrice={ item.price }
            handleTotalPrice={ this.handleTotalPrice }
            availableQuantity={ item.availableQuantity }
          />
        ))}
        <span>{ `Total: R$${(totalPrice.toFixed(2))}` }</span>
      </div>
    );
  }
}
Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      qtd: PropTypes.number,
      price: PropTypes.number,
    }),
  ).isRequired,
};
export default Cart;
