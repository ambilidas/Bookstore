import React from 'react'
import './login.css'
import TextField from '@mui/material/TextField';
import { LogIn } from '../../services/userservice';
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function Login() {

  
  const [regexObj, setRegexObj] = React.useState({
    emailBorder: false,
    emailHelper: "",
    passwordBorder: false,
    passwordHelper: "",
  });

  const [loginObj, setLoginObj] = React.useState({ email: "", password: "" });

  const takeEmail = (event) => {
    setLoginObj((prevState) => ({ ...prevState, email: event.target.value }));
  };

  const takePassword = (event) => {
    setLoginObj((prevState) => ({...prevState, password: event.target.value}));
  };

  const submit = () => {
    let emailTest = emailRegex.test(loginObj.email);
    let passwordTest = passwordRegex.test(loginObj.password);

    if (emailTest === false) {
      setRegexObj((prevState) => ({
        ...prevState,
        emailBorder: true,
        emailHelper: "enter correct email",
      }));
    } else if (emailTest === true) {
      setRegexObj((prevState) => ({
        ...prevState,
        emailBorder: false,
        emailHelper: "",
      }));
    }
    if (passwordTest === false) {
      setRegexObj((prevState) => ({
        ...prevState,
        passwordBorder: true,
        passwordHelper: "enter correct password",
      }));
    } else if (passwordTest === true) {
      setRegexObj((prevState) => ({
        ...prevState,
        passwordBorder: false,
        passwordHelper: "",
      }));
    }

    if (emailTest===true && passwordTest === true) {
      LogIn(loginObj)
          .then((resp) => { console.log(resp); localStorage.setItem('token', resp.data.id) })
          .catch((error) => { console.log(error) })
  }

  }  
  return (
    <div className='mainbox-login'>
      <div className='input-field-login'>
        <label className='emailid-login'>Email Id</label>
        <TextField className='emailtextfield-login' id="outlined-basic"
          error={regexObj.emailBorder}
          label="Email"
          variant="outlined"
          onChange={takeEmail}
          helperText={regexObj.emailHelper}
          size='small' />

        <label className='password-login'>Password</label>

        <TextField className='passwordtextfield-login' id="outlined-basic"
          error={regexObj.passwordBorder}
          label="Password"
          variant="outlined"
          onChange={takePassword}
          helperText={regexObj.passwordHelper}
          size='small'/>

        <label className='forgot-password'>Forgot Password?</label>
        <button className='login-btn' onClick={submit}>Login</button>
        <p className='or-login'>OR</p>
      </div>
      <div className='btn-field-login'>
        <button className='facebook'>Facebook</button>
        <button className='google'>Google</button>
      </div>
    </div>
  )
}

export default Login