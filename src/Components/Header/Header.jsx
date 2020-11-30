import React from 'react'
import './Header.scss'
import Logo from '../../Assets/Logo.svg'

import CartItem from '../CartItem/CartItem'
import CartDropDown from '../Cart/CartDropDown'

import {auth} from '../../Firebase/FirebaseUtils'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Header = ({currentUser, hidden}) => (
  <div className="header">
     <Link className='logo-container' to='/'>
        <img src={Logo} alt="logo" className='logo'/>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">SHOP</Link>
        <Link className="option" to="/contact">CONTACT</Link>

        {
          currentUser ?
          (
          <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
          )
        :
          (
          <Link className="option" to="/signin">SIGN IN</Link>
          )
        }

        <CartItem />
      </div>

          {
              hidden ? null : <CartDropDown />
          }

  </div>
)

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
} )

export default connect(mapStateToProps)(Header)
