import React, { useState } from 'react'
import { menLevelTwo } from '../../../data/category/level Two/menLevelTwo'
import { womenLevelTwo } from '../../../data/category/level Two/womenLevelTwo'
import { furniturelevelTwo } from '../../../data/category/level Two/furnitureLevelTwo'
import { electronicsLevelTwo } from '../../../data/category/level Two/electronicsLevelTwo'
import { menLevelThree } from '../../../data/category/level Three/menLevelThree'
import { womenLevelThree } from '../../../data/category/level Three/womenLevelThree'
import { furnitureLevelThree } from '../../../data/category/level Three/furnitureLevelThree'
import { electronicsLevelThree } from '../../../data/category/level Three/electronicsLevelThree'
import { useFormik } from 'formik'
import { uploadToCloudinary } from '../../../util/uploadToCloudinary'
import {
  Button,
  CircularProgress,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import CloseIcon from '@mui/icons-material/Close'

/* ---------------- TYPES ---------------- */
type Color = {
  name: string
  hex: string
}

/* ---------------- STATIC DATA ---------------- */
const colors: Color[] = [
  { name: 'Red', hex: '#FF0000' },
  { name: 'Blue', hex: '#0000FF' },
  { name: 'Green', hex: '#008000' },
  { name: 'Black', hex: '#000000' },
  { name: 'White', hex: '#FFFFFF' }
]

const quantities: number[] = [1, 5, 10, 20, 50, 100]

const categories: string[] = [
  'men',
  'women',
  'kids',
  'home_furniture',
  'beauty',
  'electronics'
]

const sizesList: string[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

/* ---------------- CATEGORY MAPS ---------------- */
const categoryTwo: { [key: string]: any[] } = {
  men: menLevelTwo,
  women: womenLevelTwo,
  kids: [],
  home_furniture: furniturelevelTwo,
  beauty: [],
  electronics: electronicsLevelTwo,
}

const categoryThree: { [key: string]: any[] } = {
  men: menLevelThree,
  women: womenLevelThree,
  kids: [],
  home_furniture: furnitureLevelThree,
  beauty: [],
  electronics: electronicsLevelThree,
}

/* ---------------- COMPONENT ---------------- */
const AddProduct = () => {
  const [uploadImage, setUploadingImage] = useState(false)

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      mrpPrice: '',
      sellingPrice: '',
      quantity: '',
      color: '',
      images: [] as string[],
      category: '',
      category2: '',
      category3: '',
      sizes: '',
    },
    onSubmit: (values) => {
      console.log(values)
    },
  })

  /* ---------------- DERIVED LIST ---------------- */
  const category2List: string[] =
    formik.values.category
      ? categoryTwo[formik.values.category]?.map((item: any) => item.name) || []
      : []

  const category3List: string[] = []
  if (formik.values.category && formik.values.category2) {
    const level2Item = categoryTwo[formik.values.category].find(
      (item) => item.name === formik.values.category2
    )
    if (level2Item) {
      category3List.push(
        ...(categoryThree[level2Item.key] || []).map((item) => item.name)
      )
    }
  }

  /* ---------------- IMAGE HANDLERS ---------------- */
  const handleImageChange = async (event: any) => {
    const file = event.target.files[0]
    setUploadingImage(true)
    const image = await uploadToCloudinary(file)
    formik.setFieldValue('images', [...formik.values.images, image])
    setUploadingImage(false)
  }

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...formik.values.images]
    updatedImages.splice(index, 1)
    formik.setFieldValue('images', updatedImages)
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="space-y-4 p-4">
        <Grid container spacing={2}>

          {/* IMAGE UPLOAD */}
          <Grid size={{ xs: 12 }} className="flex flex-wrap gap-5">
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              hidden
              onChange={handleImageChange}
            />

            <label htmlFor="fileInput" className="relative">
              <span className="w-24 h-24 cursor-pointer flex items-center justify-center">
                <AddPhotoAlternateIcon />
              </span>
              {uploadImage && <CircularProgress />}
            </label>

            {formik.values.images.map((image: string, index: number) => (
              <div key={index} className="relative">
                <img src={image} className="w-24 h-24 object-cover" />
                <IconButton
                  size="small"
                  color="error"
                  onClick={() => handleRemoveImage(index)}
                  sx={{ position: 'absolute', top: 0, right: 0 }}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </div>
            ))}
          </Grid>

          {/* TITLE */}
          <Grid size={{ xs: 12 }}>
            <TextField fullWidth label="Title" {...formik.getFieldProps('title')} required />
          </Grid>

          {/* DESCRIPTION */}
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Description"
              {...formik.getFieldProps('description')}
              required
              multiline
              rows={4}
            />
          </Grid>

          {/* PRICES */}
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField fullWidth label="MRP Price" {...formik.getFieldProps('mrpPrice')} required />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField fullWidth label="Selling Price" {...formik.getFieldProps('sellingPrice')} required />
          </Grid>

          {/* COLOR */}
          <Grid size={{ xs: 12, md: 4 }}>
            <FormControl fullWidth required>
              <InputLabel>Color</InputLabel>
              <Select {...formik.getFieldProps('color')} label="Color">
                {colors.map((color: Color, index: number) => (
                  <MenuItem key={index} value={color.name}>
                    <div className="flex gap-2 items-center">
                      <span
                        style={{ backgroundColor: color.hex }}
                        className="w-4 h-4 rounded-full border"
                      />
                      {color.name}
                    </div>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* QUANTITY */}
          <Grid size={{ xs: 12, md: 4 }}>
            <FormControl fullWidth required>
              <InputLabel>Quantity</InputLabel>
              <Select {...formik.getFieldProps('quantity')} label="Quantity">
                {quantities.map((qty: number) => (
                  <MenuItem key={qty} value={qty}>{qty}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* CATEGORY */}
          <Grid size={{ xs: 12, md: 4 }}>
            <FormControl fullWidth required>
              <InputLabel>Category</InputLabel>
              <Select
                {...formik.getFieldProps('category')}
                label="Category"
                onChange={(e) => {
                  formik.setFieldValue('category', e.target.value)
                  formik.setFieldValue('category2', '')
                  formik.setFieldValue('category3', '')
                }}
              >
                {categories.map((cat: string) => (
                  <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* CATEGORY 2 */}
          <Grid size={{ xs: 12, md: 4 }}>
            <FormControl fullWidth required>
              <InputLabel>Second Category</InputLabel>
              <Select
                {...formik.getFieldProps('category2')}
                label="Second Category"
                onChange={(e) => {
                  formik.setFieldValue('category2', e.target.value)
                  formik.setFieldValue('category3', '')
                }}
              >
                {category2List.map((cat: string) => (
                  <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* CATEGORY 3 */}
          <Grid size={{ xs: 12, md: 4 }}>
            <FormControl fullWidth required>
              <InputLabel>Third Category</InputLabel>
              <Select {...formik.getFieldProps('category3')} label="Third Category">
                {category3List.map((cat: string) => (
                  <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* SIZE */}
          <Grid size={{ xs: 12, md: 4 }}>
            <FormControl fullWidth required>
              <InputLabel>Size</InputLabel>
              <Select {...formik.getFieldProps('sizes')} label="Size">
                {sizesList.map((size: string) => (
                  <MenuItem key={size} value={size}>{size}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid size={{ xs: 12}}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
          >
            ADD PRODUCT
          </Button>
        </Grid>

        </Grid>
      </form>
    </div>
  )
}

export default AddProduct
