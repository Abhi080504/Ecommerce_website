import React from 'react'
import ElectricCategory from './ElectricCategory/ElectricCategory'
import CategoryGrid from './CategoryGrid/CategoryGrid'
import DealCard from './Deals/DealCard'
import Deals from './Deals/Deals'
import ShopByCategory from './ShopByCategory/ShopByCategory'
import customTheme from '../../../Theme/customTheme'
import { Button } from '@mui/material'
import { Storefront } from '@mui/icons-material'

const Home = () => {
  return (
    <>
<div className='space-y-5 lg:space-y-10 relative pb-20'>
    <ElectricCategory/> 
    <CategoryGrid/>
    <div className='pt-20'>
      <h1 className='text-lg lg:text-4xl font-bold text-primary-color pb-10
      lg:pb-20 text-center'>Today's Deals</h1>
    <Deals/>
    </div>   
    <section className='pt-20'>
      <h1 className='text-lg lg:text-4xl font-bold text-primary-color pb-10
      lg:pb-20 text-center'>SHOP BY CATEGORY</h1>
    <ShopByCategory/>
    </section>

    <section className=' lg:px20 relative h-[200px] lg:h-[450px] object-cover'>
      <img className='w-full h-full'src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PDw8PDQ8PDw8PDw8PDQ8NDw8NFRUWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNyg5LisBCgoKDQ0NDg0NDysZFRkrKysrKysrNy03KystKzcrNy03Ky0tKy03Ky0tKysrNysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAABAAIFB//EABYQAQEBAAAAAAAAAAAAAAAAAAABEf/EABgBAQEBAQEAAAAAAAAAAAAAAAABAwIE/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwDy4snXoeFqGM6YK3CzKVGjGTBGjAYDUaZhga1CIVQtMNSqh0xmVqURpAiExkqrSCAkIcwpQASEBOsoGloQjSZIjhLUmb0NJlqCNQxlqUVqIGKFqMxqCNQwQg1DGdMVGiIgMaZWq5bLKBoswg0gga0spRpBBCgRIkkEMQQjWoIHDKTNuodBHLUpjMIrcQhijUMZMEbLBlBuFmUg0YyVRsKIDKdZMVGizqEaMZhBpCIRrUEpSQtFKCQKCBpBCRxSyWbYpJUaMZhgjRjMpFaOsxpQ6WSI3KdYjQNGMwwGiyYqNRDSBQIkJZOqjSCBosnQOoIQpAGkEBQSq4xCZNWkEoYWSOWiyYK3DrMqlBtCJRpphqURrTrJBrTrEagNFgqjREQpIQjWoLVctIIGkEBQQpOhCHUCEcYhM2rSGkEYkqLTGSI1K1KwYK01KzDAJgSjRjJgjRjOmUG4WTKDUTOlRosxoEkhCghI1qCUOrQhCQQRCBxyCzakxkgSCCSSpE1KyRGjGSK1KdZhBpBKNQsmCNrWSDRlZ0g0dZMUa1CEQoIVoJCIpBEklSHUIgclAs2qIMEMMEUBpBQEQlRoxkiNHWSK0ZWSDSBUOmVmERoskGtMZINFnVoNHWdWqjRZIFBA0mZSBQQRyUC4alAiEhCGEQgUCAKSoYWZTBGoYy1BSWY0oSyQJZIjR1lA0ZWdOg0oyYDRZ1aDS0JUaiZINIIHJSThqikBIQhIQjS0QgQiAKSoToUEaajBFbQlIIgqGVaEI0WdINJkgTrJA6dZQNaWVKDWoWoHLITloSEBIQEjUISEI0oCBCIJJKh1qMQiNEIVrSydAkJQ6WSDSZIhOs6QOoIGkydBpM6Qc1JOWiMSBJICUgRSERSEMSQEJKFJDkylICdSFMqKBJJQoIQkICkgKSAakgf/2Q==" 
      alt=""/>
      <div className='absolute top-1/2 left-4 lg:left-[15rem] transform-translate-y-1/2 font-semibold lg:text-4xl space-y-3'>
      <h1>Sell your Product</h1>
      <p className='text-lg md:text-2xl'>With 
      <span className='logo'> our Ecommerce website</span></p>
      
      <div className='pt-6 flex justify-center'>
        <Button startIcon={<Storefront/>}variant='contained' size='large'>
          Become Seller
        </Button>
      </div>
      
      </div>
    </section>
</div>    
      
    </>
  )
}

export default Home
