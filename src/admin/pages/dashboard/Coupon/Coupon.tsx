import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import { Delete } from '@mui/icons-material';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
const Coupon = () => {
  const[accountStatus, setAccountStatus] = useState("ACTIVE")
  const handleChange = (event:any)=>{
    setAccountStatus(event.target.value)
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="customized table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "black" }}>
              <TableCell sx={{ color: "white" }} >Coupon Code</TableCell>
              <TableCell sx={{ color: "white" }} align="right">Start Date</TableCell>
              <TableCell sx={{ color: "white" }} align="right">End Date</TableCell>
              <TableCell sx={{ color: "white" }} align="right">Minimum</TableCell>
              <TableCell sx={{ color: "white" }} align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                          {row.name}
                </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">
                <Button>
                  <Delete/>
                </Button>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Coupon