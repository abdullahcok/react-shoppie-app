import React from 'react'

import SignIn from '../../Components/SignIn/SignIn'
import SignUp from '../../Components/SignUp/SignUp'

import { SignUIContainer } from './SignUIPage.Styles';

const SignUIPage = () => (
  <SignUIContainer>
    <SignIn />
    <SignUp />
  </SignUIContainer>

)

export default SignUIPage
