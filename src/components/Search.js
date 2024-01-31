import React, { useState } from 'react'
import prod from '../produits.json'
import { Link } from 'react-router-dom'

function Search() {

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
          <div>
            {isSearch===false?(
              <span></span>
            ):(
              filtredProducts.map((product,index)=>{
                return <Link className='row p-2 py-1 text-decoration-none text text-dark' key={index} to={`/product_details/${product.id}`}><span className='bg-light p-2'>{product.designation}</span></Link>
              })
            )}
          </div>
      </div>
    </div>
  )
}

export default Search