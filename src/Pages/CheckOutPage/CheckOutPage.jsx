import React from 'react'
import './CheckOutPage.scss'

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {selectCartItems, selectCartTotal} from '../../Redux/cart/cart-selectors'

import CheckOutItem from '../../Components/CheckOutItem/CheckOutItem.jsx'


const CheckOutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
      <div className='checkout-header'>
              <div className='header-block'>
                    <span>Product</span>
              </div>
              <div className='header-block'>
                    <span>Description</span>
              </div>
              <div className='header-block'>
                    <span>Quantity</span>
              </div>
              <div className='header-block'>
                    <span>Price</span>
              </div>
              <div className='header-block'>
                    <span>Remove</span>
              </div>

      </div>

      {
        cartItems.map(cartItem => (
            <CheckOutItem key={cartItem.id} cartItem={cartItem} />
        ))
      }

      <div className='total'>
          <span>TOTAL: ${total} </span>
      </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage)
