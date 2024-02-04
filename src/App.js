import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Panier from './components/Panier'
import ProductDetails from './components/ProductDetails';

function App() {
  /*const name = talbi*/
  return (
    <div className='container-fluid'>
        <Routes>
            <Route path='/' element={<Home/>}/> 
            <Route path='/panier' element={<Panier/>}/> 
            <Route path='/product_details/:product_id' element={<ProductDetails/>}/> 
        </Routes>
    </div>
  )
}

export default App