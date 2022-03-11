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

export default ProductAttributes;
