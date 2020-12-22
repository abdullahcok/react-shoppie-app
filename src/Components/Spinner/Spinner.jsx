import React from 'react'
import {SpinnerOverlay, SpinnerContainer} from './Spinner.Styles'

const WithSpinner = WrappedComponent => {
    const Spinner = ({isLoading, ...otherProps}) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    )
    :
    (
      <WrappedComponent {...otherProps}/>
    )
  }
  return Spinner
}

export default WithSpinner
