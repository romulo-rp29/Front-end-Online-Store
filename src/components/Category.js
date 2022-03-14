import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Category extends Component {
  handleInputChange = () => {
    const { setCategory, id } = this.props;
    setCategory(id);
  }

  render() {
    const { name, id } = this.props;
    return (
      <div>
        <label htmlFor={ id } data-testid="category">
          <input
            type="radio"
            name="category"
            id={ id }
            onChange={ this.handleInputChange }
          />
          <span>{name}</span>
        </label>
      </div>
    );
  }
}
Category.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default Category;
