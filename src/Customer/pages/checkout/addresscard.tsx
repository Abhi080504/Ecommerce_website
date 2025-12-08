import React from 'react'
import { Radio } from '@mui/material'
const addresscard = () => {
    const handleChange =(event:any) => {
        console.log(event.target.checked)
    }
  return (
    <div className='p-5 border rounded-md flex'>
        <div>
            <Radio 
            checked={true}
            onChange={handleChange}
            value=""
            name="radio-button"
            />
        </div>
        <div className='space-y-3 pt-3'>
            <h1>SHAQ</h1>
            <p className='w-[320px]'>
               Malhar Cinema, Thane, Maharashtra 
            </p>
            <p>
            <strong>Mobile : </strong>  9877228912
            </p>
        </div>
    </div>
  )
}

export default addresscard