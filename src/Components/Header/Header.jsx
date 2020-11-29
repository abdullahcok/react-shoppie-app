import React from 'react'
import './Header.scss'
import Logo from '../../Assets/Logo.svg'

import {auth} from '../../Firebase/FirebaseUtils'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Header = ({currentUser}) => (
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

      </div>
  </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)
