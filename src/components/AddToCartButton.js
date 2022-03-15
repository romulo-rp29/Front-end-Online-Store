import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddToCartButton extends Component {
  render() {
    const { addCart, title, price } = this.props;
    return (
      <div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => addCart(title, price) }
        >
          Adicionar ao carrrinho
        </button>
      </div>
    );
  }
}

AddToCartButton.propTypes = {
  addCart: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default AddToCartButton;
