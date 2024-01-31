import React from 'react'
import Header from './Header'
import Total from './Total'
import Search from './Search'
import Products from './Products'

function Home() {
  return (
    <div>
        <Header/>
        <div className='row mt-3'>
            <Search/>
            <Total/>
        </div>
        <Products/>
    </div>
  )
}

export default Home