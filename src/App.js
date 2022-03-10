import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './components/Routes';
import Cart from './components/CartButton';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Cart />
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
