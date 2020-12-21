import React from 'react'

import {connect} from 'react-redux'
import {addItem, clearItem, removeItem} from '../../Redux/cart/cart-actions'

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './CheckOutItem.Styles';

const CheckOutItem = ({cartItem, addItem,clearItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = cartItem

    return(
      <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
    )
  }

const mapDispatchToProps= dispatch => ({
    addItem: item => dispatch(addItem(item)),
    clearItem: item => dispatch(clearItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps)(CheckOutItem)
