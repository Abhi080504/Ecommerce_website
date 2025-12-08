import React, { useState } from 'react'
import SellerAccountForm from './SellerAccountForm';
import SellerLoginForm from './SellerLoginForm';
import { Button } from '@mui/material';

const BecomeSeller = () => {
    const [isLogin,setIsLogin]=useState(false);

    const handleShowPage=()=>{
        setIsLogin(!isLogin);
    }
  return (
    <div className='grid md:gap-10 grid-cols-3 min-h-screen'>
        <section className='lg:col-span-1 md:col-span-2 col-span-3 p-10 shadow-lg
        rounded-b-md'>

            {! isLogin?<SellerAccountForm/>:<SellerLoginForm/>}

            <div className='mt-10 space-y-2'>
                <h1 className='text-center text-sm font-medium'>Have Account</h1>
                <Button onClick={handleShowPage} fullWidth sx={{py:"11px"}}
                variant='outlined'>
                    {isLogin ? "Register" : "Login"}
                </Button>
            </div>
        </section>
        <section className='hidden md:col-span-1 lg:col-span-2 md:flex justify-center items-center'>

            <div className='lg:w-[70%] px-5 space-y-10'>
                <div className='space-y-2 font-bold text-center'>
                    <p className='text-2xl'>Join the market place</p>
                    <p className='text-lg text-primary-color'>Sale Boost</p>

                </div>
                <img className='mx-auto' src="data:image/png;base64,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" alt=''/>
            </div>

        </section>
      
    </div>
  )
}

export default BecomeSeller
