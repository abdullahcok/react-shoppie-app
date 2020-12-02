import React from 'react'
import './CartDropDown.scss'

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {withRouter } from 'react-router-dom'

import CustomButton from '../CustomButton/CustomButton'
import CartItem  from '../CartItem/CartItem'

import {selectCartItems} from '../../Redux/cart/cart-selectors'
import {toggleCartHidden} from '../../Redux/cart/cart-actions'


const CartDropDown = ({cartItems, history, dispatch}) => {
      return(
        <div className='cart-dd'>
          <div className='cart-items'>
              {
                cartItems.length
                ?
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id}  item={cartItem}/>
                ))
                :
                (
                    <span className='empty-message'>Your cart is empty</span>
                )
              }
          </div>
          <CustomButton onClick={() => {
                            history.push('/checkout')
                            dispatch(toggleCartHidden())
                          }}
                      >
              GO TO CHECKOUT
          </CustomButton>
        </div>
      )
  }

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown))
