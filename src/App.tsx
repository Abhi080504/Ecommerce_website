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
import Account from './Customer/pages/Account/Account';
import { Route, Routes } from 'react-router-dom';
import BecomeSeller from './Customer/pages/Become Seller/BecomeSeller';

function App() {
  return (
    
      <ThemeProvider theme={customTheme}>

      <div>
       <Navbar/>
       {/*<Home/>*/}
       {/*<Product/>*/}
       {/* <ProductDetails/> */}
       {/* <Review/> */}
       {/* <Account/> */}


       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/:category" element={<Product/>}/>
        <Route path="/reviews/productId" element={<Review/>}/>
        <Route path='/product-details/:categoryId/:name/:productId' element={<ProductDetails/>}/>
        {/* <Route path='/cart' element={<Placeholder / } */}
        {/* <Route path='/checkout' element={<Checkout/>}/> */}
        <Route path='/become-seller' element={<BecomeSeller/>}/>
        <Route path="/account/*" element={<Account/>}/>

      </Routes>
      </div>

      </ThemeProvider>
    
  );
}
export default App;
