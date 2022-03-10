import React, { Component } from 'react';
import { getCategories } from '../services/api';
import Category from './Category';

class CategoryList extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const categories = await getCategories();
    this.setState({ categories });
  };

  render() {
    const { categories } = this.state;
    return (
      <aside>
        {categories.map((category) => (
          <Category key={ category.id } name={ category.name } id={ category.id } />
        ))}
      </aside>
    );
  }
}

export default CategoryList;
