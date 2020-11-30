import React from 'react'
import './CartDropDown.scss'

import CustomButton from '../CustomButton/CustomButton'


const Cart = () => (
  <div className='cart-dd'>
    <div className='cart-items'>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  </div>
)

export default Cart
