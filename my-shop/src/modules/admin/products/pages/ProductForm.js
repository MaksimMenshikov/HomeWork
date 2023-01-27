import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  MenuItem,
  
} from '@mui/material';
import { Form, Formik } from 'formik';
import MyTextField from '../../../common/form/MyTextField';
import ProductValidationSchema from '../validation/ProductValidationSchema';
import { useNavigate, useParams } from 'react-router-dom';
import useProducts from '../../../common/products/hook/useProducts';
import useCategories from '../../../common/categories/hook/useCategories';
import MySelect from '../../../common/form/MySelect'
import useProduct from '../../../common/products/hook/useProduct';



function ProductForm() {
  const {list}=useCategories();  
  const navigate = useNavigate();
  const { createProduct,updateProduct } = useProducts();
  const { id } = useParams();
  const product = useProduct(+id);
  
 
  function handleSubmit(values) {
    save(values).then(handleClose);
  }
  function save(product) {
    if (product.id) {
        return updateProduct(product);
    } else {
        return createProduct(product);
    }
  }

function handleClose() {
    navigate('..');
}

  return (
      <Dialog open={true} onClose={handleClose}>
          <Formik
              enableReinitialize
              initialValues={product}
              onSubmit={handleSubmit}
              validationSchema={ProductValidationSchema}
          >
              <Form>
                  <DialogTitle>Your Product</DialogTitle>
                  <DialogContent>
                      <MyTextField
                          autoFocus
                          margin="dense"
                          name="title"
                          label="Product Name"
                          type="text"
                          fullWidth
                          variant="standard"
                      />
                       <MyTextField
                          autoFocus
                          margin="dense"
                          name="price"
                          label="Price"
                          type="number"
                          fullWidth
                          variant="standard"
                      />
                        <InputLabel >Category</InputLabel>
                        <MySelect name="categoryId" fullWidth label="categoryId" id="categoryId" >
                            {list.map(({id,title}) => (
                                  <MenuItem key={id} value={id}>{title}</MenuItem>))}
                        </MySelect>
                      <MyTextField
                          autoFocus
                          margin="dense"
                          name="description"
                          label="Description"
                          type="text"
                          fullWidth
                          variant="standard"
                      />
                  </DialogContent>
                  <DialogActions>
                      <Button onClick={handleClose}>Cancel</Button>
                      <Button type="submit">Save</Button>
                  </DialogActions>
              </Form>
          </Formik>
      </Dialog>
  );
}
export default ProductForm

