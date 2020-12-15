import React from 'react'
import './Header.scss'
import Logo from '../../Assets/Logo.png'

import {auth} from '../../Firebase/FirebaseUtils'
import CartIcon from '../CartIcon/CartIcon'
import CartDropDown from '../Cart/CartDropDown'
import { selectCartHidden } from '../../Redux/cart/cart-selectors'
import { selectCurrentUser } from '../../Redux/User/user-selector'

import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

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

        <CartIcon />
      </div>

          {
              hidden ? null : <CartDropDown />
          }

  </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
