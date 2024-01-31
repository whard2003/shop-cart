import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';


function Total() {
  const panier=useSelector((state)=>state.panier.panier)
  let totalProducts=panier.length
  return (
    <div className='col-12 col-md-1 col-lg-1'>
        <Link to="/panier" className='btn btn-warning btn btn-sm'>
            Panier 
            <FontAwesomeIcon 
                icon={faShoppingCart} 
                style={{ fontSize: 10, color: "black" }}
                className="ms-1"
            />
            <span className='ms-1'>{totalProducts}</span>
        </Link>

    </div>
  )
}

export default Total