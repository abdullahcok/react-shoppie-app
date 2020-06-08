import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'
// import Logo from '../../Assets/logo.svg'

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">

    </Link>
    <div className="options">
      <Link className="option" to="/about">ABOUT US</Link>
      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to="/contact">CONTACT</Link>
    </div>
  </div>
)

export default Header