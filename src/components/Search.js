import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CardProducts from './CardProducts';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      products: [],
    };
  }

  async componentDidMount() {
    this.handleSearchButtonClick();
  }

  handleInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSearchButtonClick = async () => {
    const { search } = this.state;
    const { category } = this.props;
    const response = await getProductsFromCategoryAndQuery(category, search);
    this.setState({ products: response.results });
  }

  render() {
    const { search, products } = this.state;
    return (
      <div>
        <div>
          <div>
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
            <label htmlFor="search-input">
              <input
                data-testid="query-input"
                id="search-input"
                name="search"
                value={ search }
                onChange={ this.handleInputChange }
              />
            </label>

            <button
              data-testid="query-button"
              type="button"
              onClick={ this.handlesearchButtonClick }
            >
              enviar
            </button>
          </div>
          <div className="product-container">
            { products.map((product) => (
              <CardProducts key={ product.id } dataProduct={ product } />
            )) }
          </div>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Search;
