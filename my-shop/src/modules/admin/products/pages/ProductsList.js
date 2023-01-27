import React from 'react'
import ProductsTable from '../components/ProductsTable';
import { Outlet } from 'react-router-dom';


function ProductsList() {
  return (
    <>
      <ProductsTable />
      <Outlet />
    </>
  )
}

export default ProductsList

