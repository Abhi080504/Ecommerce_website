import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../Seller/pages/Products/Products'
import AddProduct from '../Seller/pages/Products/AddProduct'
import Orders from '../Seller/pages/Orders/Orders'
import Profile from '../Seller/pages/Account/Profile'
import Transaction from '../Seller/pages/Payment/Transaction'

const SellerRoutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route path='/*' element={<Dashboard/>}/> */}
        <Route path='/products' element={<Products/>}/>
        <Route path='/add-product' element={<AddProduct/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/account' element={<Profile/>}/>
        <Route path='/transaction' element={<Transaction/>}/>
      </Routes>
    </div>
  )
}

export default SellerRoutes
