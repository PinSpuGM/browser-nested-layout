import { Outlet } from 'react-router-dom'

import ProductNavbar from '../components/ProductsNavbar'
import { useState } from 'react'

const ProductsLayout = ({mainMenu, productMenu, setProductMenu}) => {
  return (
    <div className='d-flex'>
      <ProductNavbar mainMenu={mainMenu} productMenu={productMenu} setProductMenu={setProductMenu} />
      <div
        className='ms-2 w-100 border border-black rounded-2 p-2 bg-success-subtle'
        style={{ height: '280px' }}
      >
        <Outlet />
      </div>
    </div>
  )
}

export default ProductsLayout
