import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Category extends Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <label htmlFor="category" data-testid>
          <input type="radio" name="category" id="category" data-testid="category" />
        </label>
        <p>{name}</p>
      </>
    );
  }
}
Category.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Category;
