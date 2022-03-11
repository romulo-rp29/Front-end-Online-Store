import React, { Component } from 'react';
import CategoryList from '../components/CategoryList';
import Search from '../components/Search';
import ShoppingCart from '../components/ShoppingCart';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
    };
  }

  setCateogry = (category) => {
    this.setState({ category });
  }

  render() {
    const { category } = this.state;
    return (
      <div
        className="home"
      >
        <CategoryList setCateogry={ this.setCateogry } />
        <Search category={ category } />
        <ShoppingCart />
      </div>
    );
  }
}

export default Home;
