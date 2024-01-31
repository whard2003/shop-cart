import React from 'react'
import Header from './Header'
import Search from './Search'
import Total from './Total'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveProduct, IncrementQuantity, DecrementQuantity } from '../redux/panier/actionsCreator'

function Panier() {
    const panier=useSelector((state)=>state.panier.panier)
    const dispatching=useDispatch()
    const isPanierEmpty=panier.length
  return (
    <div>
        <Header/>
        <div className='row mt-3'>
            <Search/>
            <Total/>
        </div>
        <h2>Panier</h2>
        {isPanierEmpty===0?(
            <h6 className='alert alert-warning border-0'>Try to add products !</h6>
        ):(
        <div className='mt-3'>
            <table className='table-area'>
                <tbody>
                    {/* head area */}
                    <tr className='fw-bold thead-area'>
                        <td className='pe-5'>Image</td>
                        <td className='pe-5'>Designation</td>
                        <td className='pe-5'>Price</td>
                        <td className='pe-5'>Quantity</td>
                        <td className='pe-5'>Action</td>
                    </tr>
                    {/* body area */}
                    {panier.map((panierItem,index)=>{
                        return <tr key={index}>
                                   <td><img className='product-img' src={`./image/${panierItem.img}`} alt='...'/></td>
                                   <td>{panierItem.designation}</td>
                                   <td>{panierItem.price===1?(
                                      <span>{panierItem.price}</span>
                                   ):(
                                      <span>{(panierItem.price*panierItem.quantity).toFixed(2)}</span>
                                   )}</td>
                                   <td>
                                       <div className='d-flex align-items-center mt-1 p-0 m-0'>
                                           <button onClick={()=>dispatching(DecrementQuantity(panierItem.id))} className='btn btn-outline-warning btn btn-sm quanity-btn'>-</button>
                                           <div className='mx-1'>{panierItem.quantity}</div>
                                           <button onClick={()=>dispatching(IncrementQuantity(panierItem.id))} className='btn btn-outline-warning btn btn-sm quanity-btn'>+</button>
                                       </div>
                                   </td>
                                   <td>
                                       <button onClick={()=>dispatching(RemoveProduct(panierItem.id))} className='btn btn-outline-danger btn-sm mt-2'>delete</button>
                                   </td>
                               </tr>
                    })}
                </tbody>
            </table>
        </div>)
        }
    </div>
  )
}

export default Panier