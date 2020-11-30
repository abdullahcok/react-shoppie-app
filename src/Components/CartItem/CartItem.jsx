import React from 'react'
import './CartItem.scss'
import {ReactComponent as CartIcon } from '../../Assets/Cart.svg'

import {connect} from 'react-redux'
import {toggleCartHidden} from '../../Redux/cart/cart-actions'

const CartItem = ({toggleCartHidden}) => (
    <div className='cart-item' onClick={toggleCartHidden}>
        <CartIcon className='cart-icon'/>
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});


export default connect(null, mapDispatchToProps)(CartItem)
