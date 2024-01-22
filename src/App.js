import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListStagiaires from './components/ListStagiaires'
import AjouterStagaire from './components/AjouterStagaire'
import SupStagiaires from './components/SupStagiaires'
import RechercheStagiaire from './components/RechercheStagiaire'


function App() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<ListStagiaires/>}/>
            <Route path='/ajouterStagaiare' element={<AjouterStagaire/>}/>
            <Route path='/supprimerStagaiare' element={<SupStagiaires/>}/>
            <Route path='/rechercherStagaiare' element={<RechercheStagiaire/>}/>
        </Routes>
    </div>
  )
}

export default App