import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Category extends Component {
  handleInputChange = () => {
    const { setCateogry, id } = this.props;
    setCateogry(id);
  }

  render() {
    const { name, id } = this.props;
    return (
      <div>
        <label htmlFor={ id } data-testid>
          <input
            type="radio"
            name="category"
            id={ id }
            data-testid="category"
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
  setCateogry: PropTypes.func.isRequired,
};

export default Category;
