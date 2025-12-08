import React from "react";
import { Box, Grid, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

type FormValues = {
  name: string; mobile: string; pinCode: string; address: string;
  city: string; state: string; locality: string;
};

const AddressFormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  mobile: Yup.string().required("Mobile is required").matches(/^[6-9]\d{9}$/, "Invalid mobile"),
  pinCode: Yup.string().required("Pin code is required").matches(/^[1-9][0-9]{6}$/, "Invalid pin code"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  locality: Yup.string().required("Locality is required"),
});

const AddressForm: React.FC = () => {
  const formik = useFormik<FormValues>({
    initialValues: { name: "", mobile: "", pinCode: "", address: "", city: "", state: "", locality: "" },
    validationSchema: AddressFormSchema,
    onSubmit: (v) => console.log("submit", v),
  });

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", p: 2 }}>
      <form onSubmit={formik.handleSubmit} noValidate>
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

          <Grid size={12} sx={{ textAlign: "right" }}>
            <Button type="submit" variant="contained">Save</Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddressForm;