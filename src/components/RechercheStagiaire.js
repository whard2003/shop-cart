import React from 'react'
import Header from './Header'

function RechercheStagiaire() {
  return (
    <div className='container'>
        <Header/> 
        <div className='row d-flex justify-content-center mt-4'>
            <div className='col-12 col-md-4 col-lg-4'>
                <form>
                  <div className="mb-3">
                    <h1>Rechercher stagiaire</h1>
                  </div> 
                  <div className="mb-3">
                    <label nom="nom" className="form-label">Rechercher</label>
                    <input type="email" className="form-control" id="nom" aria-describedby="emailHelp"/>
                  </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default RechercheStagiaire