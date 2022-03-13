import React, { Component } from 'react';
import CategoryList from '../components/CategoryList';
import Search from '../components/Search';
import ShoppingCart from '../components/ShoppingCart';
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

  setCateogry = async (category) => {
    this.setState({ category }, this.searchItemCards);
  }

  render() {
    const { category, products, search } = this.state;
    const { addCart } = this.props;
    return (
      <div
        className="home"
      >
        <CategoryList setCateogry={ this.setCateogry } />
        <Search
          category={ category }
          products={ products }
          search={ search }
          handleSearchChange={ this.handleSearchChange }
          searchItemCards={ this.searchItemCards }
          addCart={ addCart }
        />
        <ShoppingCart />
      </div>
    );
  }
}

export default Home;
