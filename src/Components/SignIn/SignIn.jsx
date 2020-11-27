import React from 'react';
import './SignIn.scss'
import FormInput from '../FormInput/FormInput.jsx'
import CustomButton from '../CustomButton/CustomButton.jsx'

import {auth, signInWithGoogle} from '../../Firebase/FirebaseUtils.jsx'


class SignIn extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const{email, password} = this.state

    try{
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({email: '', password: ''})
    }catch(error){
        console.log(error);
    }
  }

  handleChange = event => {
    const {value, name} = event.target;

    this.setState({[name]: value});
  }

  render(){
    return(
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your e-mail and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name='email'
                 type='email'
                 label='email'
                 onChange={this.handleChange}
                 value={this.state.email}
                 required
              />
          <FormInput name='password'
                 type='password'
                 label='password'
                 value={this.state.password}
                 onChange={this.handleChange}
                 required
              />
              <div className='buttons'>
                  <CustomButton type='submit'> Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                      {' '}
                      Sign In with Google {' '}
                    </CustomButton>
                </div>
        </form>
      </div>
    );
  }
}

export default SignIn
