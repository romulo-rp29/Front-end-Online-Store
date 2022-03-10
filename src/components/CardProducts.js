import PropTypes from 'prop-types';
import React, { Component } from 'react';

class CardProducts extends Component {
  render() {
    const { dataProduct: { title, thumbnail, price } } = this.props;
    return (
      <div
        data-testid="product"
        className="card-products"
      >
        <p>{ title }</p>
        <img src={ thumbnail } alt={ title } className="card-products__image" />
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
