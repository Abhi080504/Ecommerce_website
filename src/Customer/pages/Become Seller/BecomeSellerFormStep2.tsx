import React from "react";
import { Box, Grid, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";


const BecomeSellerFormStep2= ({formik}:any) => {
  
  return (
    <Box>
        
        <p className='text-xl font-bold text-center pb-5'>Pick Up address</p>

      <>
        <Grid container spacing={3}>
          <Grid size={12}>
            <TextField name="name" label="Name" fullWidth value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}
              error={Boolean(formik.touched.name && formik.errors.name)} helperText={formik.touched.name && formik.errors.name} />
          </Grid>

          <Grid size={6}>
            <TextField name="mobile" label="Mobile" fullWidth value={formik.values.mobile} onChange={formik.handleChange} onBlur={formik.handleBlur}
              error={Boolean(formik.touched.mobile && formik.errors.mobile)} helperText={formik.touched.mobile && formik.errors.mobile} />
          </Grid>

          <Grid size={6}>
            <TextField name="pinCode" label="Pincode" fullWidth value={formik.values.pinCode} onChange={formik.handleChange} onBlur={formik.handleBlur}
              error={Boolean(formik.touched.pinCode && formik.errors.pinCode)} helperText={formik.touched.pinCode && formik.errors.pinCode} />
          </Grid>

          <Grid size={12}>
            <TextField name="address" label="Address" fullWidth value={formik.values.address} onChange={formik.handleChange} onBlur={formik.handleBlur}
              error={Boolean(formik.touched.address && formik.errors.address)} helperText={formik.touched.address && formik.errors.address} />
          </Grid>

          <Grid size={6}>
            <TextField name="city" label="City" fullWidth value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur}
              error={Boolean(formik.touched.city && formik.errors.city)} helperText={formik.touched.city && formik.errors.city} />
          </Grid>

          <Grid size={6}>
            <TextField name="state" label="State" fullWidth value={formik.values.state} onChange={formik.handleChange} onBlur={formik.handleBlur}
              error={Boolean(formik.touched.state && formik.errors.state)} helperText={formik.touched.state && formik.errors.state} />
          </Grid>

          <Grid size={12}>
            <TextField name="locality" label="Locality" fullWidth value={formik.values.locality} onChange={formik.handleChange} onBlur={formik.handleBlur}
              error={Boolean(formik.touched.locality && formik.errors.locality)} helperText={formik.touched.locality && formik.errors.locality} />
          </Grid>
        </Grid>
      </>
    </Box>
  );
};

export default BecomeSellerFormStep2;