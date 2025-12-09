import React from 'react'
import { Button, Divider, IconButton } from '@mui/material'
import { Remove, Add } from '@mui/icons-material'
import { Close } from '@mui/icons-material'

const cartitem = () => {

  const handleUpdateQuantity=()=>{

  }  
  return (
    <div className='border rounded-md and relative'>
        <div className='p-5 flex gap-3'>
            <div>
                <img className='w-[90ppx] rounded-md' src="https://i.pinimg.com/736x/f8/8e/83/f88e837dfcb3415d1be6941c333e5aac.jpg"
                alt='' />
            </div>
            <div className='space-y-2'>

                <h1 className='font-semibold text-lg'>Hoodie</h1>
                <p className='text-gray-600 font-medium text-sm'>Top Quality Hoodie</p>
                <p className='text-gray-400 text-xs'> <strong>Sold by</strong> BlackMagic Private Limited</p>
                <p className='text-sm'>7 days replacement available</p>
                <p className='text-sm text-gray-500'> <strong>quantity : </strong> 3 </p>

            </div>


        </div>
        
            <Divider/>
                   
            <div className='flex justify-between items-center'>  
                <div className='px-5 py-2 flex justify-between items-center'>

                    <div className='flex items-center gap-2 w-[140px] justify-between'>
                        <Button onClick={handleUpdateQuantity} disabled={true}>
                    <Remove/>    
                            
                        </Button>
                        <span>
                            {5}
                        </span>
                        <Button onClick={handleUpdateQuantity}>
                        <Add />
                        </Button>
                    </div>
                    <div className='pr-5'>
                        <p className='bg-gray-700 font-medium font-semibold'>799</p>
                    </div>
                </div>
                <div className='absolute top-1 right-1'>
                    <IconButton color="primary">
                        <Close/>
                    </IconButton>

                </div>
            </div>
            
          
    </div>
  )
}

export default cartitem