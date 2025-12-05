import { Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { teal } from '@mui/material/colors'
import React from 'react'
import { color } from '../../../data/Filter/color'

const FilterSection = () => {
  return (
    <div className='-z-50 space-y bg-white'>
      <div className='flex items-center justify-between h-[40px] px-9 lg:border-r'>
        <p className='text-lg font-semibold'>
          Filters
        </p>
        <Button size='small' className='text-teal-600 cursor-pointer font-semibold'>
          Clear all
        </Button>
        </div>
        <Divider/>
        
        <section>

    <FormControl>
      <FormLabel 
      sx={{fontSize:"16px",
          fontWeight:"bold",
          color:teal[500],
          pb:"14px"
      }}
      className="text-2xl font-semibold" id='color'>
        Color
        </FormLabel>
      <RadioGroup
        aria-labelledby="Color"
        defaultValue=""
        name="color"
      >
        {color.map((item)=><FormControlLabel value="female" control={<Radio/>}
        label={<div className='flex items-center'>
            <p>{item.name}</p>
            <p style={{backgroundColor:item.hex}} 
            className={`h-5 w-5 rounded-full ${item.name=="White"?"border":""}`}></p>
        </div>}/>)}
                
      </RadioGroup>
    </FormControl>
  </section>

      
      
  </div>
  )
}

export default FilterSection
