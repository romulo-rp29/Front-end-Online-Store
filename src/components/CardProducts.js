import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FreeShipping from './FreeShipping';

class CardProducts extends Component {
  render() {
    const { dataProduct: { title, thumbnail, price, id, shipping } } = this.props;
    const freeShipping = Object.values(shipping)[0];
    const { addCart } = this.props;
    return (
      <div
        data-testid="product"
        className="card-products"
      >
        <p>{ title }</p>
        {freeShipping ? (<FreeShipping />) : null}
        <img src={ thumbnail } alt={ title } className="card-products__image" />
        <span>{ `R$${price}` }</span>
        <Link
          addCart={ addCart }
          to={ `/productdetails/${id}` }
          data-testid="product-detail-link"
        >
          Mais Detalhes
        </Link>

        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => addCart(title, price) }
        >
          Adicionar ao carrrinho
        </button>
      </div>
    );
  }
}
CardProducts.propTypes = {
  dataProduct: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }),
  }).isRequired,
  addCart: PropTypes.func.isRequired,
};

export default CardProducts;
