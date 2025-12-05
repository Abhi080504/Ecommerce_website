import React, { useEffect, useState } from 'react'
import "./ProductCard.css"
import { Favorite, ModeComment } from '@mui/icons-material';
import { Button } from '@mui/material';
import { teal } from '@mui/material/colors';
const images = ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FyaWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FyaWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",]


const ProductCard = () => {
    const [currentImage,setCurrentImage] = useState(0); 
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {

        let interval:any
        if(isHovered){
            interval=setInterval(()=>{
                setCurrentImage((prevImage) => (prevImage + 1) % images.length);
            },1000);
        }
        else if(interval){
            clearInterval(interval);
            interval=null;
        }   
        return () => clearInterval(interval);

    },[isHovered])


  return (
    <>
      <div className='group px-4 relative'>
        <div className='card'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            {images.map((item,index)=><img className='card-media object-top'
            src={item} alt=""
            style={{transform: `translateX(${(index-currentImage)*100}%)`}}
            />)}
        { 
            isHovered && <div className='indicator flex flex-col items-center space y-2'>
                <div className='flex gap-3'>
                    <Button variant='contained' color='secondary'>
                        <Favorite sx={{color: teal[500]}}/>

                    </Button>

                    <Button variant='contained' color='secondary'>
                        <ModeComment sx={{color: teal[500] }}/>

                    </Button>
                </div>
            </div>
        }
        </div>
        <div className='details pt-3 space-y-1 group-hover-effect rounded-md'>
            <div className='name'>
                <h1>Nike</h1>
                <p>Red Shoe</p>

            </div>
            <div className="price flex items-center gap-3">
                <span className="font-sans text-gray-gray-800">
                    RS 400
                </span>

                <span className='thin-line-through text-grap-400'>
                    RS 9090
                </span>

                <span className="text-primary-color font-semibold">
                    60%
                </span>
            </div>

        </div>
        </div>

      
    </>
  )
}

export default ProductCard
