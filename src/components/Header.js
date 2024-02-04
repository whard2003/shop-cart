import React from 'react'
import { Link} from 'react-router-dom'



function Header() {
  return (
    <div className='container-fluid bg-dark d-flex justify-content-start'>
        <p className='mt-2'><Link to="/" className='fw-bold text-white text-decoration-none'>Home</Link></p>
        <p className='mt-2'><Link to="/panier" className='fw-bold text-white ms-3 text-decoration-none'>Panier</Link></p>
    </div>
  )
}

export default Header 