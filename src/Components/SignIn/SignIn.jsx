import React from 'react';
import './SignIn.scss'
import FormInput from '../FormInput/FormInput.jsx'
import CustomButton from '../CustomButton/CustomButton.jsx'


class SignIn extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({email: '', password: ''})
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
          <FormInput name="email"
                 type="email"
                 label="e-mail"
                 onChange={this.handleChange}
                 value={this.state.email}
                 required
              />
          <FormInput name="password"
                 type="password"
                 label="password"
                 value={this.state.password}
                 onChange={this.handleChange}
                 required
              />
          <CustomButton type="submit">
            Sign In
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn