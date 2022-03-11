import React, { Component } from 'react';
import { getProductDetails } from '../services/api';
import ProductAttributes from '../components/ProductAttributes';

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      price: '',
      thumbnail: '',
      details: [],
    };
  }

  componentDidMount() {
    this.getProduct();
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

  render() {
    const { title, price, thumbnail, details } = this.state;
    return (
      <>
        <h1 data-testid="product-detail-name">{title}</h1>
        <img src={ thumbnail } alt="" />
        <p>{`R$${price}`}</p>
        {details.map((item) => (<ProductAttributes
          key={ item.id }
          name={ item.name }
          valueName={ item.value_name }
        />))}

      </>
    );
  }
}

export default ProductDetails;
