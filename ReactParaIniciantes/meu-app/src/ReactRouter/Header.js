import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log('Mudou a rota')
  }, [location])

  return (
    <ul>
      <li><NavLink to="/" end>Home</NavLink></li>
      <li><NavLink to="contatos">Contatos</NavLink></li>
      <li><NavLink to="login">Login</NavLink></li>
      <li><NavLink to="produto/notebook">Notebook</NavLink></li>
      <li><NavLink to="produto/smartphone">Smartphone</NavLink></li>
    </ul>
  )
}

export default Header
