import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './components/Routes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
    };
  }

  addCart = (title, price, shipping) => {
    const { cartItems } = this.state;
    const item = {
      title,
      qtd: 1,
      price,
      shipping,
    };
    if (cartItems === null) {
      return this.setState({ cartItems: [item] });
    }
    const newArray = [...cartItems];
    const itemExist = newArray.find((value) => value.title === title);
    if (itemExist) {
      itemExist.qtd += 1;
      return this.setState({ cartItems: newArray });
    }
    return this.setState((prevState) => ({
      cartItems: [...prevState.cartItems, item],
    }));
  }

  render() {
    const { cartItems } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <Routes addCart={ this.addCart } cartItems={ cartItems } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
