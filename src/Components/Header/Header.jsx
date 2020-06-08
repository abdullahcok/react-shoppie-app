import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'
import Logo from '../../Assets/logo.png'

const Header = () => (
  <div className="header">
    <img src={Logo} alt="logo" />

    <div className="options">
      <Link className="option" to="/about">ABOUT US</Link>
      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to="/contact">CONTACT</Link>
      <Link className="option" to="/signin">SIGN IN</Link>
    </div>
  </div>
)

export default Header
