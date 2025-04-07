import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Router, Route } from "react-router-dom"
import Header from './components/Header'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Products from './components/Products'
import Product from './components/Product'
import EditProduct from './components/EditProduct'
function App() {

  return (
    <>
      {/* //http://localhost:3000/products */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='aboutus' element={<AboutUs />} />
          <Route path='products' element={<Products />} />
          <Route path='products/product' element={<Product />} />
          <Route path='products/editproduct/:id' element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
