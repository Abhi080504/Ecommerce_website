import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ThemeProvider } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Navbar from './Customer/components/Navbar/Navbar';
import customTheme from './Theme/customTheme';
import Home from './Customer/pages/Home/Home';
import Product from './Customer/pages/Product/Product';
import ProductDetails from './Customer/pages/ProductDetails/ProductDetails';
import Review from './Customer/pages/Review/Review';
import Cart from './Customer/pages/cart/cart';
import Checkout from './Customer/pages/checkout/checkout';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <Navbar />
        {/* <Home/> */}
        {/* <Product/> */}

        {/* <ProductDetails/> */}
        {/* <Review/> */}
        {/* <Cart/> */}
        <Checkout />
      </div>
    </ThemeProvider>
  );
}

export default App;
