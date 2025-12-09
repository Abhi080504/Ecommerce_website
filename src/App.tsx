import React from 'react';
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
import BecomeSeller from './Customer/pages/Become Seller/BecomeSeller';
import SellerDashboard from './Seller/pages/SellerDashboard/SellerDashboard';

// His imports
import Cart from './Customer/pages/cart/cart';
import Checkout from './Customer/pages/checkout/checkout';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<Product />} />
          <Route path="/reviews/productId" element={<Review />} />
          <Route path="/product-details/:categoryId/:name/:productId" element={<ProductDetails />} />

          {/* Added his pages */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="/become-seller" element={<BecomeSeller />} />
          <Route path="/account/*" element={<Account />} />
          <Route path="/seller/*" element={<SellerDashboard />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
