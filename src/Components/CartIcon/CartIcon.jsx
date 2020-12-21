import React from 'react'

import {createStructuredSelector} from 'reselect'

import {connect} from 'react-redux'
import {toggleCartHidden} from '../../Redux/cart/cart-actions'
import {selectCartItemsCount} from '../../Redux/cart/cart-selectors'

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './CartIcon.Styles';

const CartItem = ({toggleCartHidden, itemCount}) => (
  <CartContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
        itemCount: selectCartItemsCount
    })



export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
