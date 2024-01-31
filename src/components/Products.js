import React from 'react'
import Product from '../produits.json';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddProduct } from '../redux/panier/actionsCreator';

function Products() {
    // const product=useSelector((state)=>state.panier.products)
    const dispatching=useDispatch()
  return (
    <div className='row products-area'>
        {Product.map((prod,index)=>{
            return <div className='col-12 col-md-4 col-lg-3' key={index}>
                    <div className='border p-1 mt-3' >
                        <Link to={`/product_details/${prod.id}`} className='text-decoration-none text-dark'>
                            <img src={`../../image/${prod.img}`} alt='img-prod' className='product-image'/>
                        </Link>
                        <p>{prod.designation.substring(0,30)} ...</p>
                        <p className='fw-bold'>{prod.price} <span className='fw-light'>DH(HT)</span></p>
                        <p onClick={()=>dispatching(AddProduct({id:prod.id,quantity:prod.quantity,designation:prod.designation,price:prod.price,img:prod.img}))} className='btn btn-outline-primary mt-3'>Ajouter au panier</p>
                    </div>
            </div>
        })}
    </div>
  )
}

export default Products