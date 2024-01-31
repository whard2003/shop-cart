import React from 'react'
import Total from './Total'
import Search from './Search'
import Header from './Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AddProduct,DecrementQuantity,IncrementQuantity } from '../redux/panier/actionsCreator'
import Product from "../produits.json"

function ProductDetails() {
    const panier=useSelector((state)=>state.panier.panier)
    const dispatching=useDispatch()
    
    const {product_id}=useParams()
    const filterProduct = Product.filter((prod) => {
        return prod.id === Number(product_id);
    });

    const isProductInPanier=panier.find((itemPanier)=>itemPanier.id===Number(product_id))

    
  return (
    <div>
        <Header/>
        <div className='row mt-3'>
            <Search/>
            <Total/>
        </div>
        <div className='mt-3'>
            {filterProduct.map((prod, index)=>{
                    return <div key={index} className='d-flex justify-content-start'>
                        <img src={`../../image/${prod.img}`} className='img-thumbnail product-details-img p-0 me-3'/>
                        <div className=''>
                            <p><span className='fw-bold'>Designation: </span>{prod.designation}</p>
                            <p><span className='fw-bold'>Price: </span> {prod.price}</p>
                            {isProductInPanier?(
                                <div>
                                    <span className='fw-bold'>Quantity: </span>
                                    <div className='d-flex align-items-center mt-2'>
                                        <button onClick={()=>dispatching(DecrementQuantity(prod.id))} className='btn btn-outline-warning btn btn-sm quanity-btn'>-</button>
                                        <div className='mx-1'>{isProductInPanier.quantity}</div>
                                        <button onClick={()=>dispatching(IncrementQuantity(prod.id))} className='btn btn-outline-warning btn btn-sm quanity-btn'>+</button>
                                    </div>
                                </div>
                            ):(
                                <span></span>
                            )}
                            <p onClick={()=>dispatching(AddProduct({id:prod.id,quantity:prod.quantity,designation:prod.designation,price:prod.price,img:prod.img}))} className='btn btn-outline-primary mt-3'>Ajouter au panier</p>
                        </div>
                    </div>
                })
            }
            
        </div>
    </div>
  )
}
export default ProductDetails