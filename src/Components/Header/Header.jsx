import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'
import Logo from '../../Assets/Logo.svg'

import {auth} from '../../Firebase/FirebaseUtils'

const Header = ({currentUser}) => (
  <div className="header">
     <Link className='logo-container1' to='/'>
        <img src={Logo} alt="logo" class='logo'/>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">SHOP</Link>
        <Link className="option" to="/contact">CONTACT</Link>

        {
          currentUser ?
          <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
          :
          <Link className="option" to="/signin">SIGN IN</Link>
        }

      </div>
  </div>
)

export default Header
