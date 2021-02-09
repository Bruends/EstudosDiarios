import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <ul>
      <li><NavLink to="/" end>Home</NavLink></li>
      <li><NavLink to="contatos">Contatos</NavLink></li>
      <li><NavLink to="login">Login</NavLink></li>
    </ul>
  )
}

export default Header
