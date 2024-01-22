import React from 'react'
import Header from './Header'

function SupStagiaires() {
  return (
    <div className='container'>
        <Header/>
        <div className='row d-flex justify-content-center mt-4'>
            <div className='col-12 col-md-4 col-lg-4'>
                <form>
                  <div className="mb-3">
                    <h1>Supprimer stagiaire</h1>
                  </div>  
                  <div className="mb-3">
                    <label nom="nom" className="form-label">Nom</label>
                    <input type="email" className="form-control" id="nom" aria-describedby="emailHelp"/>
                  </div>
                  <button type="button" className="btn btn-danger">Supprimer stagiaire</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SupStagiaires