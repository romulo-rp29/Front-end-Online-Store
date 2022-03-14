import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddToCartButton extends Component {
  render() {
    const { addCart, title } = this.props;
    return (
      <div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => addCart(title) }
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
};

export default AddToCartButton;
