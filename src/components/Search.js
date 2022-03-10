import React, { Component } from 'react';
import CategoryList from './CategoryList';

class Search extends Component {
  render() {
    return (
      <>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoryList />
      </>
    );
  }
}

export default Search;
