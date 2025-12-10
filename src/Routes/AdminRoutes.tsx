import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SellersTable from '../Seller/SellersTable'
import Coupon from '../admin/pages/dashboard/Coupon/Coupon'
import AddNewCouponForm from '../admin/pages/dashboard/Coupon/AddNewCouponForm'
import GridTable from '../admin/pages/dashboard/HomePage/GridTable'
import ElectronicTable from '../admin/pages/dashboard/HomePage/ElectronicTable'
import ShopByCategory from '../Customer/pages/Home/ShopByCategory/ShopByCategory'
import Deal from '../admin/pages/dashboard/HomePage/Deal'

const AdminRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<SellersTable/>}/>
        <Route path='/coupon' element={<Coupon/>}/>
        <Route path='/add-coupon' element={<AddNewCouponForm/>}/>
        <Route path='/home-grid' element={<GridTable/>}/>
        <Route path='/electronics-category' element={<ElectronicTable/>}/>
        <Route path='/shop-by-category' element={<ShopByCategory/>}/>
        <Route path='/deals' element={<Deal/>}/>
    </Routes>
  )
}

export default AdminRoutes