import React from 'react'
import Header from './Header'

function AjouterStagaire() {
  return (
    <div className='container'>
        <Header/>
        <div className='row d-flex justify-content-center mt-4'>
            <div className='col-12 col-md-4 col-lg-4'>
                <form>
                  <div className="mb-3">
                    <h1>Ajouter stagiaire</h1>
                  </div> 
                  <div className="mb-3">
                    <label nom="nom" className="form-label">Nom</label>
                    <input type="email" className="form-control" id="nom" aria-describedby="emailHelp"/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="prenom" className="form-label">Prenom</label>
                    <input type="email" className="form-control" id="prenom" aria-describedby="emailHelp"/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="filiere" className="form-label">Filiere</label>
                    <input type="email" className="form-control" id="filiere" aria-describedby="emailHelp"/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="ville" className="form-label">Ville</label>
                    <select class="form-select form-select-lg mb-3" id='ville' aria-label="Large select example">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image</label>
                    <input type="file" className="form-control" id="image" aria-describedby="emailHelp"/>
                  </div>
                  <button type="button" className="btn btn-primary">ajouter</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AjouterStagaire