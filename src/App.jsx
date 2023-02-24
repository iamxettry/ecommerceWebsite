import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import Product from './pages/Product'
import SingleProduct from './pages/SingleProduct'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Navbar/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='product' element={<Product/>}/>
            <Route path='singleproduct/ :id' element={<SingleProduct/>}/>
            <Route path='cart' element={<Cart/>}/>

            <Route path='*' element={<PageNotFound/>}/>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App