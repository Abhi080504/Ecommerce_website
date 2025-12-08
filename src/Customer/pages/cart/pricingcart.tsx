import { Divider } from '@mui/material'
import React from 'react'

const pricingcart = () => {
  return (
    <div>
        <div className='space-y-3 p-5'>
            <div className='flex justify-between items-center'>
                <span>Subtotal</span>
                <span>2000</span>
            </div>
            <div className='flex justify-between items-center'>
                <span>Discount</span>
                <span>1000</span>
            </div>
            <div className='flex justify-between items-center'>
                <span>Shipping</span>
                <span>99</span>
            </div>
            <div className='flex justify-between items-center'>
                <span>Platform</span>
                <span>Free</span>
            </div>
            
          
        
             

        </div>
          <Divider>
              
            </Divider>
          <div className='flex justify-between items-center p-5 text-primary-color'>
                <span>Total</span>
                <span>1099</span>
            </div>
    </div>
  )
}

export default pricingcart