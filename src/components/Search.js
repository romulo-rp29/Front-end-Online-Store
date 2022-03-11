import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CardProducts from './CardProducts';

class Search extends Component {
  render() {
    const { search, products, handleSearchChange, searchItemCards } = this.props;
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
                onChange={ handleSearchChange }
              />
            </label>

            <button
              data-testid="query-button"
              type="button"
              onClick={ searchItemCards }
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
  search: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.any).isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  searchItemCards: PropTypes.func.isRequired,
};

export default Search;
