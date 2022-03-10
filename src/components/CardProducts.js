import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardProducts extends Component {
  render() {
    const { dataProduct: { title, thumbnail, price } } = this.props;
    return (
      <div data-testid="product">
        <p>{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <span>{ `R$${price}` }</span>
      </div>);
  }
}
CardProducts.propTypes = {
  dataProduct: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default CardProducts;
