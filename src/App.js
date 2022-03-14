import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './components/Routes';
import { loadCartItem, saveCartItems } from './services/saveAPI';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
    };
  }

  componentDidMount() {
    const cartItems = loadCartItem();
    this.setState({ cartItems });
  }

  addCart = (title, price) => {
    const { cartItems } = this.state;
    const item = {
      title,
      qtd: 1,
      price,
    };
    if (cartItems === null) {
      return this.setState({ cartItems: [item] }, this.saveCart);
    }
    const newArray = [...cartItems];
    const itemExist = newArray.find((value) => value.title === title);
    if (itemExist) {
      itemExist.qtd += 1;
      this.setState({ cartItems: newArray }, this.saveCart);
      return;
    }
    return this.setState((prevState) => ({
      cartItems: [...prevState.cartItems, item],
    }), this.saveCart);
  }

  saveCart = () => {
    const { cartItems } = this.state;
    saveCartItems(cartItems);
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
