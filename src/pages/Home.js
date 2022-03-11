import React, { Component } from 'react';
import CategoryList from '../components/CategoryList';
import Search from '../components/Search';
import ShoppingCart from '../components/ShoppingCart';

class Home extends Component {
  render() {
    return (
      <div
        className="home"
      >
        <CategoryList />
        <Search />
        <ShoppingCart />
      </div>
    );
  }
}

export default Home;
