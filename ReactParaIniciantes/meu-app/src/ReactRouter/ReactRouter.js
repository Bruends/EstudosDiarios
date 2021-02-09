import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contatos from './Contatos'
import Home from './Home'
import Header from './Header'
import Login from './Login'
import Produto from './Produto'

const ReactRouter = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/produto/:id" element={<Produto />} />
          <Route path="*" element={<p>404</p>} />
        </Routes>
        <footer></footer>
      </BrowserRouter>
    </>    
  )
}

export default ReactRouter