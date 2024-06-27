import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Pokedex from './pages/Pokedex'
import PokeInfo from './pages/PokeInfo'
import ProtectedRoutes from './pages/ProtectedRoutes'
import PokeFooter from './components/shared/PokeFooter'

function App() {
  

  return (
   <div>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route element={<ProtectedRoutes/>}>
        <Route path='/pokedex' element={<Pokedex/>}/>
        <Route path='/pokedex/:id' element={<PokeInfo/>}/>
      </Route>
    </Routes>
    <PokeFooter/>
   </div>
  )
}

export default App
