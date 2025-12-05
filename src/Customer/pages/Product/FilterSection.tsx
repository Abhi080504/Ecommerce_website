import { Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { teal } from '@mui/material/colors'
import React, { useState } from 'react'
import { color } from '../../../data/Filter/color'
import { price } from '../../../data/Filter/price'  
import { discount } from '../../../data/Filter/discount';
import { useSearchParams } from 'react-router-dom'

const FilterSection = () => {
  const [expandColor, setExpandColor] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleColorToggle = () => {
    setExpandColor(!expandColor);
  };

  // ✅ added missing function
    const updateFilterParams = (e: any ) => {
      const{value, name} =e.target;
      if(value){
        searchParams.set(name,value);
      }else{
        searchParams.delete(name);
      }
    setSearchParams(searchParams);
  };

    const clearAllFilters = ()=> {
      console.log("clearAllFilters",searchParams)
      searchParams.forEach((value: any, key:any)=>{
        searchParams.delete(key);
      });
      setSearchParams(searchParams);
    };
  return (
    <div className='-z-50 space-y bg-white'>
      <div className='flex items-center justify-between h-[40px] px-9 lg:border-r'>
        <p className='text-lg font-semibold'>
          Filters
        </p>
        <Button size='small' className='text-teal-600 cursor-pointer font-semibold'
        onClick={clearAllFilters}>
          Clear all
        </Button>
      </div>

      <Divider />

      <div className='px-9 space-y-6'>
        
        {/* COLOR SECTION */}
        <section>
          <FormControl>
            <FormLabel 
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: teal[600],   // removed duplicate color
                pb: "14px"
              }}
              id='color'
            >
              Color
            </FormLabel>

            <RadioGroup
            aria-labelledby="Color" 
            defaultValue="" 
            name="color"
            onChange={updateFilterParams}>
              {color.slice(0, expandColor ? color.length : 5).map((item, index) =>
                <FormControlLabel
                  key={index}
                  value={item.name}
                  control={<Radio />}
                  label={
                    <div className='flex items-center'>
                      <p>{item.name}</p>
                      <p
                        style={{ backgroundColor: item.hex }}
                        className={`h-5 w-5 rounded-full ${item.name == "White" ? "border" : ""}`}
                      ></p>
                    </div>
                  }
                />
              )}
            </RadioGroup>
          </FormControl>

          <div>
            <button
              onClick={handleColorToggle}
              className='text-primary-color cursor-pointer hover:text-teal-900 flex-items-center'
            >
              {expandColor ? "See Less" : `+${color.length - 5} more`}
            </button>
          </div>
        </section>

        {/* PRICE SECTION */}
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: teal[600],
                pb: "14px"
              }}
              id='price'
            >
              Price
            </FormLabel>

            <RadioGroup
              name="price"
              onChange={updateFilterParams}
              aria-labelledby="Price"
              defaultValue=""
            >
              {price.map((item, index) => (
                <FormControlLabel
                  key={index}
                  value={item.value}
                  control={<Radio size="small" />}
                  label={item.name}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </section>

        {/* DISCOUNT SECTION */}
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: teal[600],
                pb: "14px"
              }}
              id='discount'
            >
              Discount
            </FormLabel>

            <RadioGroup
              name="discount"
              aria-labelledby="Discount"
              defaultValue=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setSearchParams({ discount: event.target.value });
              }}
            >
              {discount.map((item, index) => (
                <FormControlLabel
                  key={index}
                  value={item.value}
                  control={<Radio size="small" />}
                  label={item.name}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </section>


      </div>

    </div>
  )
}

export default FilterSection
