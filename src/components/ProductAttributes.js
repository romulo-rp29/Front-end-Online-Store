import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ProductAttributes extends Component {
  render() {
    const { name, valueName } = this.props;
    return (
      <div>
        <p>{name}</p>
        <p>{valueName}</p>
      </div>
    );
  }
}

ProductAttributes.propTypes = {
  name: PropTypes.string.isRequired,
  valueName: PropTypes.string.isRequired,
};

export default ProductAttributes;
