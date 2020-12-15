import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51Hye2aLSJNiKGHn1nnCnesZz3cQ8Vo0qwUlu2scTe7TByCHexYi8odpy2x1muyJfUswf6gvZhItT6Bl5i0WUX8qM00F0GSD96E'

    const onToken = token => {
      console.log(token);
      alert('Payment Successfull')
      }

    return (
        <StripeCheckout label='Pay Now'
                                       name= '43pedal Ltd.'
                                       billingAddress
                                       shippingAddress
                                       image=''
                                       description={`Your total is $${price}`}
                                       amount={priceForStripe}
                                       panelLabel='Pay Now'
                                       token={onToken}
                                       stripeKey={publishableKey}
         />
    )
}


export default StripeCheckoutButton
