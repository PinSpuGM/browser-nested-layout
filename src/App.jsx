import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AppLayout from './Layouts/AppLayout'
import ProductsLayout from './Layouts/ProductsLayout'

import Home from './pages/Home'
import Member from './pages/Members'
import Hardwares from './pages/Hardwares'
import Softwares from './pages/Softwares'
import Others from './pages/Others'
import Carts from './pages/Carts'
import About from './pages/About'
import ForwardHome from './pages/ForwardHome'

function App() {
  const [mainMenu, setMainMenu] = useState('home')
  const [productMenu, setProductMenu] = useState('hardwares')


  return (
    <div className='m-2 border border-black rounded-2 p-2'>
      <BrowserRouter basename='/browser-nested-layout/'>
        <Routes>
          <Route
            element={
              <AppLayout mainMenu={mainMenu} setMainMenu={setMainMenu} />
            }
          >
            <Route path='home' element={<Home />} />
            <Route path='members' element={<Member />} />
            <Route
              path='products'
              element={
                <ProductsLayout
                  mainMenu={mainMenu}
                  productMenu={productMenu}
                  setProductMenu={setProductMenu}
                />
              }
            >
              <Route path='hardwares' element={<Hardwares />} />
              <Route path='softwares' element={<Softwares />} />
              <Route path='others' element={<Others />} />
            </Route>
            <Route path='carts' element={<Carts />} />
            <Route path='about' element={<About />} />
            <Route path='*' element={<ForwardHome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
