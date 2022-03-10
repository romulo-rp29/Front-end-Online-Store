import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Category extends Component {
  render() {
    const { name, id } = this.props;
    return (
      <div>
        <label htmlFor={ id } data-testid>
          <input type="radio" name="category" id={ id } data-testid="category" />
          <span>{name}</span>
        </label>
      </div>
    );
  }
}
Category.propTypes = {
  name: PropTypes.string.isRequired,
};

Category.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Category;
