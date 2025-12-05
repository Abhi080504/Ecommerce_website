import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import { teal } from '@mui/material/colors';
import { Button, Divider } from '@mui/material';
import { AddShoppingCart, FavoriteBorder, LocalShipping, Remove, Shield, Wallet, WorkspacePremium } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import "./ProductDetails.css"
import SimilarProduct from './SimilarProduct';
import ReviewCard from '../Review/ReviewCard';

const ProductDetails = () => {

  const[quantity, setQuantity] = React.useState(1);
  return (
    <div className='px-5 lg:px-20 pt-10'>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <section className="flex flex-col lg:flex-row gap-5">
          <div className='w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3'>
          {[1,1,1,1].map((item)=><img className='lg:w-full w-[50px] cursor-pointer rounded-md'
          src="data:image/jpeg;base64,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"
          alt=''/>)}
          </div>
          <div className='w-full lg:w-[85%]'>
            <img className='w-full rounded-md' 
            src="data:image/jpeg;base64,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"
            alt=""/>

          </div>
        </section>

        <section>
          <h1 className="font-bold text-lg text-primary-color">
            Ram Clothing
          </h1>
          <p className='text-gray-500 font-semibold'>Men Black shirt</p>
          <div className='flex justify-between items-center py-2 border w-[180px] px-3 pt-5'>
            <div className='flex gap-1 items-center'>
              <span>4</span>
              <StarIcon sx={{color:teal[500],fontSize:"17px"}}/>
              
            </div>
            <Divider orientation='vertical' flexItem/>
            <span>
              234 Ratings
            </span>
          </div>
          <div className="price flex items-center gap-3 mt-5 text-2xl">
                <span className="font-sans text-gray-gray-800">
                    RS 400
                </span>

                <span className='thin-line-through text-gray-400'>
                    RS 9090
                </span>

                <span className="text-primary-color font-semibold">
                    60%
                </span>

            </div>
            <div>
            <p className='text-sm'>Inclusive of all Taxes. Free Shipping above Rs 500
            </p>
            </div>
            <div className='mt-7 space-y-3'>

              <div className='flex items-center gap-4'>
                <Shield sx={{color:teal[500]}}/>
                <p>Quality Assured</p>

              </div>
              <div className='flex items-center gap-4'>
                <WorkspacePremium sx={{color:teal[500]}}/>
                <p>100% money back guarantee</p>

              </div>
              <div className='flex items-center gap-4'>
                <LocalShipping sx={{color:teal[500]}}/>
                <p>Free Shipping and returns</p>

              </div>
              <div className='flex items-center gap-4'>
                <Wallet sx={{color:teal[500]}}/>
                <p>Pay on delivery available</p>

              </div>
            </div>

            <div className='mt-7 space-y-2'>
            
            <h1>
              QUANTITY
            </h1>
            
            <div className='flex items-center gap-2 w-[140px] justify-between'>

            <Button disabled={quantity==1} onClick={()=>setQuantity(quantity-1)}>
              <Remove/>
            </Button>
            <span>
              {quantity}
            </span>
            <Button onClick={()=>setQuantity(quantity+1)}>
              <AddIcon/>
            </Button>

            </div>


            </div>

            <div className='mt-12 flex items-center gap-5'>
            
              <Button fullWidth
             variant='contained'
             startIcon={<AddShoppingCart/>}
             sx={{py:"1rem"}}>
              Add to Cart
             </Button>


            <Button fullWidth
             variant='outlined'
             startIcon={<FavoriteBorder/>}
             sx={{py:"1rem"}}>
              WishList
             </Button>

            </div>
            <div className='mt-5'>
              <p>This outfit features a sleeveless floral-printed kurta paired with matching straight pants,
                creating an elegant coordinated look. The soft pastel base is beautifully contrasted with a vibrant pink dupatta that adds a pop of color.
                The high-neck design and subtle detailing give it a modern yet traditional appeal, perfect for festive or semi-formal occasions.</p>
            </div>

            <div className='mt-12 space-y-5'>
              <ReviewCard/>
              <Divider/>
            </div>
        </section>

      </div>
      
      <div className='mt-20'>
        <h1 className="text-lg font-bold">
          Similar Product
        </h1>
        <div className='pt-5'>
        <SimilarProduct/>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
