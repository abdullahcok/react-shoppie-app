import React from 'react'
import './CartDropDown.scss'

import {connect} from 'react-redux'

import CustomButton from '../CustomButton/CustomButton'
import CartItem  from '../CartItem/CartItem'
import {selectCartItems} from '../../Redux/cart/cart-selectors'


const CartDropDown = ({cartItems}) => (
  <div className='cart-dd'>
    <div className='cart-items'>
        {
          cartItems.map(cartItem => <CartItem key={cartItem.id}  item={cartItem}/>)
        }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state) 
})

export default connect(mapStateToProps)(CartDropDown)
