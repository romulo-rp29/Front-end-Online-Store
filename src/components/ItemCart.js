import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemCart extends Component {
  constructor() {
    super();

    this.state = {
      productName: '',
      productQuantity: 0,
      productPrice: 0,
      productTotalPrice: 0,
      availableQuantity: 0,
      btnDisabled: false,
    };
  }

  componentDidMount() {
    const { productName, productQuantity, productPrice, handleTotalPrice, availableQuantity } = this.props;
    this.setState({
      productName,
      productQuantity,
      productPrice,
      availableQuantity,
    });
    handleTotalPrice(productPrice);
    this.setState({
      productTotalPrice: productPrice * productQuantity,
    });
  }

  increaseQuantity = async () => {
    const { productPrice, availableQuantity, productQuantity } = this.state;
    const { handleTotalPrice } = this.props;
    if (productQuantity === availableQuantity) {
      return this.setState({ btnDisabled: true });
    }
    this.setState((prevState) => ({
      productQuantity: prevState.productQuantity + 1,
    }));
    this.setState((prevState) => ({
      productTotalPrice: prevState.productPrice * prevState.productQuantity,
    }));
    handleTotalPrice(productPrice);
  }

  decreaseQuantity = () => {
    const { productQuantity, productPrice, availableQuantity } = this.state;
    const { handleTotalPrice } = this.props;
    if (productQuantity < availableQuantity) {
      this.setState({ btnDisabled: false });
    }
    if (productQuantity > 1) {
      this.setState((prevState) => ({
        productQuantity: prevState.productQuantity - 1,
      }));
      this.setState((prevState) => ({
        productTotalPrice: prevState.productPrice * prevState.productQuantity,
      }));
      handleTotalPrice(-productPrice);
    }
  }

  removeItem = ({ target }) => {
    const { productTotalPrice } = this.state;
    const { handleTotalPrice } = this.props;
    console.log(productTotalPrice);
    handleTotalPrice(-productTotalPrice);
    target.parentNode.remove();
  }

  render() {
    const { productName, productQuantity, productTotalPrice, btnDisabled } = this.state;
    return (
      <div>
        <button
          type="button"
          onClick={ this.removeItem }
        >
          🗑️
        </button>
        <p data-testid="shopping-cart-product-name">{productName}</p>
        <span>{ `R$${(productTotalPrice.toFixed(2))}` }</span>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.decreaseQuantity }
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">{productQuantity}</p>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.increaseQuantity }
          disabled={ btnDisabled }
        >
          +
        </button>
      </div>
    );
  }
}
ItemCart.propTypes = {
  productName: PropTypes.string.isRequired,
  productQuantity: PropTypes.number.isRequired,
  productPrice: PropTypes.number.isRequired,
  handleTotalPrice: PropTypes.func.isRequired,
};

export default ItemCart;
