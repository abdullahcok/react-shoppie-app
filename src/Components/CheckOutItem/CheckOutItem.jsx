import React from 'react'
import './CheckOutItem.scss'

import {connect} from 'react-redux'
import {addItem, clearItem, removeItem} from '../../Redux/cart/cart-actions'


const CheckOutItem = ({cartItem, addItem,clearItem, removeItem}) => {
    const {name,imageUrl,price,quantity} = cartItem

    return(
      <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
            <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick = {() => clearItem(cartItem)}>&#10005;</div>
      </div>
    )
  }

const mapDispatchToProps= dispatch => ({
    addItem: item => dispatch(addItem(item)),
    clearItem: item => dispatch(clearItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps)(CheckOutItem)