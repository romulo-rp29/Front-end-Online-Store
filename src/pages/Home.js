import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CartButton from '../components/CartButton';
import CategoryList from '../components/CategoryList';
import Search from '../components/Search';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      search: '',
      products: [],
    };
  }

  handleSearchChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  searchItemCards = async () => {
    const { search, category } = this.state;
    const response = await getProductsFromCategoryAndQuery(category, search);
    this.setState({ products: response.results });
  }

  setCategory = async (category) => {
    this.setState({ category }, this.searchItemCards);
  }

  render() {
    const { category, products, search } = this.state;
    const { addCart, cartItems } = this.props;
    return (
      <div
        className="home"
      >
        <CategoryList setCategory={ this.setCategory } />
        <Search
          category={ category }
          products={ products }
          search={ search }
          handleSearchChange={ this.handleSearchChange }
          searchItemCards={ this.searchItemCards }
          addCart={ addCart }
        />
        <CartButton cartItems={ cartItems } />
      </div>
    );
  }
}
Home.propTypes = {
  addCart: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default Home;
