import React, { useState } from 'react'
import prod from '../produits.json'
import { Link } from 'react-router-dom'
import { AddProduct } from '../redux/panier/actionsCreator'
import { useDispatch } from 'react-redux'

function Search() {
  const dispatching=useDispatch()
  const[value,setValue]=useState()
  const[filtredProducts,SetfiltredProducts]=useState()
  const[isSearch,setIsSearch]=useState(false)

  const handleChange=(e)=>{
    setValue(e.target.value)
    const filter=prod.filter((item)=>{
      return item.designation.toLowerCase().includes(value)
    })
    if(e.target.value!==''){
      SetfiltredProducts(filter)
      setIsSearch(true)
    }else{
      setIsSearch(false)
    }
  }
  return (
    <div className='col-12 col-md-11 col-lg-11'>
      <div className='row'>
          <div className='col-12 col-md-12 col-lg-12 seach-area-width d-flex justify-content-between'>
            <input type='text' onChange={handleChange} placeholder='Search product here...' className='form-control input-height'/>
            <button className='btn btn-primary btn btn-sm button-width' >Search</button>
          </div>
         
            {isSearch===false?(
              <span></span>
            ):(
              <div className='container row mx-2 my-2 pb-3 bg-light'>
                <h3>Searching ...</h3>
                {filtredProducts.map((product,index)=>{
                  return <div className='col-12 col-md-4 col-lg-3' key={index}>
                          <div className='p-1 mt-3 main-card border'>
                              <Link to={`/product_details/${product.id}`} className='text-decoration-none text-dark'>
                                  <img src={`../../image/${product.img}`} alt='img-prod' className='product-image-search'/>
                              </Link>
                              <p>{product.designation.substring(0,20)} ...</p>
                              <p className='fw-bold'>{product.price} <span className='fw-light'>DH(HT)</span></p>
                              <p onClick={()=>dispatching(AddProduct({id:product.id,quantity:product.quantity,designation:product.designation,price:product.price,img:product.img}))} className='btn btn-outline-primary mt-3'>Ajouter au panier</p>
                          </div>
                         </div>
                })}
              </div>
            )}
      </div>
    </div>
  )
}

export default Search