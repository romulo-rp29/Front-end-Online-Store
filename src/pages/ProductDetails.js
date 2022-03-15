import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AddToCartButton from '../components/AddToCartButton';
import CartButton from '../components/CartButton';
import ProductAttributes from '../components/ProductAttributes';
import ProductDetailsForm from '../components/ProductDetailsForm';
import ProductReview from '../components/ProductReview';
import { getProductDetails } from '../services/api';
import { loadReview } from '../services/saveAPI';

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      price: '',
      thumbnail: '',
      details: [],
      reviews: [],
    };
  }

  componentDidMount() {
    this.getProduct();
    this.getReviews();
  }

  getProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const result = await getProductDetails(id);
    this.setState({
      title: result.title,
      price: result.price,
      thumbnail: result.thumbnail,
      details: result.attributes,
    });
  }

  getReviews = () => {
    const { match: { params: { id } } } = this.props;
    const reviews = loadReview(id);
    this.setState({ reviews });
  }

  render() {
    const { title, price, thumbnail, details, reviews } = this.state;
    const { match: { params: { id } } } = this.props;
    const { addCart, cartItems } = this.props;

    return (
      <div>
        <div className="flex">
          <div className="product">
            <h1 data-testid="product-detail-name">{title}</h1>
            <img src={ thumbnail } alt="" />
            <p>{`R$${price}`}</p>
          </div>
          <div className="product-detail">
            {details.map((item) => (<ProductAttributes
              key={ item.id }
              name={ item.name }
              valueName={ item.value_name }
            />
            ))}
          </div>
          <AddToCartButton
            title={ title }
            price={ price }
            addCart={ addCart }
          />
          <CartButton cartItems={ cartItems } />
        </div>
        <ProductDetailsForm id={ id } getReviews={ this.getReviews } />
        <div />
        <div>
          {reviews.map((item) => (<ProductReview
            key={ item.id }
            review={ item }
          />))}
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  addCart: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default ProductDetails;
