import { FormControl, InputLabel, Select, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, tableCellClasses, styled, Button } from '@mui/material'
import React, { useState } from 'react'
import { color } from '../data/Filter/color';

const accountStatusOptions = [
  {status: 'PENDING_VERIFICATION', title: 'Pending Verification', description:'Account is verified'},
  {status: 'ACTIVE', title: 'Active', description:'Account is active and in good state'},
  {status: 'SUSPENDED', title: 'Suspended', description:'Account is temporarily suspended'},
  {status: 'DEACTIVATED', title: 'Deactivated', description:'Account is deactivated'},
  {status: 'BANNED', title: 'Banned', description:'Account is permanently banned'},
  {status: 'CLOSED', title: 'Closed', description:'Account is permanently closed'},
];

const StyledTableCell = styled(TableCell)(({ theme}) => ({
  [`&.${tableCellClasses.head}`]:{
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]:{
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)':{
     backgroundColor: theme.palette.action.hover, 
  },
  '&:last-child td, &:last-child th':{
    border: 0,
  }, 
}));

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

const SellersTable = () => {
  const [accountStatus, setAccountStatus] = useState("ACTIVE")

  const handleChange = (event: any) => {
    setAccountStatus(event.target.value)
  }

  return (
    <><div className="pb-2 w-60">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Account Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={accountStatus}
          label="Account Status"
          onChange={handleChange}
        >
          {accountStatusOptions.map((item) => (
            <MenuItem key={item.status} value={item.status}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

    </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Seller Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Mobile</TableCell>
                <TableCell align="right">GSTIN</TableCell>
                <TableCell align="right">BUSINESS NAME</TableCell>
                <TableCell align="right">ACCOUNT STATUS</TableCell>
                <TableCell align="right">CHANGE STATUS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">
                    <Button>Change</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </>
    
  )
}

export default SellersTable
