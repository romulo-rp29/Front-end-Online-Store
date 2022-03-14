import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryList from '../components/CategoryList';
import Search from '../components/Search';
import CartButton from '../components/CartButton';
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
    const { addCart } = this.props;
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
        <CartButton />
      </div>
    );
  }
}
Home.propTypes = {
  addCart: PropTypes.func.isRequired,
};

export default Home;
