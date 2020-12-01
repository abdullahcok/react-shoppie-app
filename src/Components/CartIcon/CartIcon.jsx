import React from 'react'
import './CartIcon.scss'
import {ReactComponent as CartIcon } from '../../Assets/Cart.svg'

import {connect} from 'react-redux'
import {toggleCartHidden} from '../../Redux/cart/cart-actions'
import {selectCartItemsCount} from '../../Redux/cart/cart-selectors'

const CartItem = ({toggleCartHidden, itemCount}) => (
    <div className='cart-item' onClick={toggleCartHidden}>
        <CartIcon className='cart-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state) => {
    return({
        itemCount: selectCartItemsCount(state)
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
