import PropTypes from 'prop-types';
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
    const { setCategory } = this.props;
    const { categories } = this.state;
    return (
      <aside>
        {categories.map((category) => (
          <Category
            key={ category.id }
            name={ category.name }
            id={ category.id }
            setCategory={ setCategory }
          />
        ))}
      </aside>
    );
  }
}

CategoryList.propTypes = {
  setCategory: PropTypes.func.isRequired,
};

export default CategoryList;
