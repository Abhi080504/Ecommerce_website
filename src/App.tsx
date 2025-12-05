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

function App() {
  return (
    
      <ThemeProvider theme={customTheme}>

      <div>
        <Navbar/>
       {/*<Home/>*/}
       {/*<Product/>*/}
       {/* <ProductDetails/> */}
       <Review/>
      </div>

      </ThemeProvider>
    
  );
}
export default App;
