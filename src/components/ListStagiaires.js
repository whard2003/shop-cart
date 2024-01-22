import React from 'react'
import Header from './Header'

const listStagiaires=[
    {nom:"kamal",prenom:"kadiri",ville:"agadir",photo:"photo1.jpg",filiere:"dev"},
    {nom:"anas",prenom:"slaoui",ville:"rabat",photo:"photo1.jpg",filiere:"infographie"},
    {nom:"noura",prenom:"kamali",ville:"safi",photo:"photo1.jpg",filiere:"getion"},
    {nom:"alaa",prenom:"raji",ville:"marakech",photo:"photo1.jpg",filiere:"dev"}
]
function ListStagiaires() {
  return (
    <div className='container'>
        <Header/>
        <h1 className='text text-center mt-3'>List Stagiaires</h1>
        <div className='row'>
            {listStagiaires.map((stagiaire)=>{
                return <div className='col-12 col-md-3 col-lg-3 mt-4' key={stagiaire.nom}>
                            <div className="card card-widht">
                              <img src={`./image/${stagiaire.photo}`} className="card-img-top" alt="..."/>
                              <div className="card-body">
                                <h5 className="card-title">{stagiaire.nom}</h5>
                                <p className="card-text">{stagiaire.prenom}</p>
                                <p className="card-text">{stagiaire.ville}</p>
                                <a href="#" className="btn btn-danger">Supprimer</a>
                              </div>
                            </div>
                        </div>
            })}
        </div>
    </div>
  )
}

export default ListStagiaires