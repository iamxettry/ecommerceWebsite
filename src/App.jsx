import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Navbar/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App