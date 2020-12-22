import React from 'react'

// import { ReactComponent as Logo } from '../../Assets/Logo.png'

import {auth} from '../../Firebase/FirebaseUtils'
import CartIcon from '../CartIcon/CartIcon'
import CartDropDown from '../Cart/CartDropDown'
import { selectCartHidden } from '../../Redux/cart/cart-selectors'
import { selectCurrentUser } from '../../Redux/User/user-selector'

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './Header.Styles';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      logo.
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/contact'>CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropDown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
