import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ProductsProvider from '../../../common/products/providers/ProductsProvider';
import { IconButton } from '@mui/material';
import CategoriesProvider from '../../../common/categories/providers/CategoriesProvider';

function Products() {
    return <CategoriesProvider>
                <ProductsProvider>
                    <Outlet />
                    <IconButton component={NavLink} to="new">
                        <AddCircleOutlineIcon />
                    </IconButton>
                </ProductsProvider>
          </CategoriesProvider>
            }

export default Products;

