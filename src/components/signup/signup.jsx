import React from 'react'
import './signup.css'
import TextField from '@mui/material/TextField';
import { SignUp } from '../../services/userservice';
import { useNavigate } from 'react-router-dom';

const fullNameRegex = /[A-Z]{1}[a-z]{2,}/;
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
// const phoneNumberRegex = /^[0-9]{2}[0-9]{10}/;


function Signup() {
  const navigate = useNavigate();
  const [regexObj, setRegexObj] = React.useState({
    fullNameBorder: false,
    fullNameHelper: "",
    emailBorder: false,
    emailHelper: "",
    passwordBorder: false,
    passwordHelper: "",

    
});
const [signupObj, setSignupObj] = React.useState({ fullName: "",email: "" , password: "", phone: "" });
 
const takeFullname = (event) => {
  setSignupObj((prevState) => ({ ...prevState, fullName: event.target.value }));
};


const takeEmailid = (event) => {
  setSignupObj((prevState) => ({...prevState,email:event.target.value}));
};

const takePassword = (event) => {
  setSignupObj((prevState) => ({
    ...prevState,
    password: event.target.value,
  }));
};

const takePhonenumber = (event) => {
  setSignupObj((prevState) => ({...prevState,phone:event.target.value}));
};

const submit = () => {
  let fullnameTest = fullNameRegex.test(signupObj.fullName);
  let emailTest = emailRegex.test(signupObj.email);
  let passwordTest = passwordRegex.test(signupObj.password);
  // let phonenumberTest = phoneNumberRegex.test(signupObj.phone);

  if (fullnameTest === false) {
    setRegexObj((prevState) => ({
      ...prevState,
      fullnameBorder: true,
      fullnameHelper: "Enter a fullname",
    }));
  } else if (fullnameTest === true) {
    setRegexObj((prevState) => ({
      ...prevState,
      fullnameBorder: false,
      fullnameHelper: "",
    }));
  }

  if (emailTest === false) {
    setRegexObj((prevState) => ({
      ...prevState,
      emailBorder: true,
      emailHelper: "Enter a email",
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
      passwordHelper: "Enter a password",
    }));
  } else if (passwordTest === true) {
    setRegexObj((prevState) => ({
      ...prevState,
      passwordBorder: false,
      passwordHelper: "",
    }));
  }

  // if (phonenumberTest === false) {
  //   setRegexObj((prevState) => ({
  //     ...prevState,
  //     phonenumberBorder: true,
  //     phonenumberHelper: "Enter a phone number",
  //   }));
  // } else if (phonenumberTest === true) {
  //   setRegexObj((prevState) => ({
  //     ...prevState,
  //     phonenumberBorder: false,
  //     phonenumberHelper: "",
  //   }));
  // }

  if(fullnameTest === true && emailTest === true && passwordTest === true ) {
    SignUp(signupObj)
          .then((resp) => { console.log(resp); navigate('/Home'); localStorage.setItem('token', resp.data.id) })
          .catch((error) => { console.log(error) })
  }
}

  return (
    <div className='mainbox-signup'>
        <label className='fullname'>Full Name</label>

        <TextField className='fullname-signup'
        id="outlined-basic"
        error={regexObj.fullnameBorder}
        variant="outlined"
        onChange={takeFullname}
        helperText={regexObj.fullnameHelper}
         size='small' />

        <label className='email-id-signup'>Email Id</label>

        <TextField className='email-signup'
         id="outlined-basic" 
         error={regexObj.emailBorder}
         variant="outlined" 
         onChange={takeEmailid}
         helperText={regexObj.emailHelper}
          size='small' />

        <label className='password-signup'>Password</label>

        <TextField className='passwordtextfield-signup'
          id="outlined-basic" 
          error={regexObj.passwordBorder}
          variant="outlined"
          onChange={takePassword}
          helperText={regexObj.passwordHelper}
           size='small' />

        <label className='mobnum'>Mobile Number</label>

        <TextField className='mob-signup' 
          id="outlined-basic" 
          error={regexObj.phonenumberBorder} 
          variant="outlined"
          onChange={takePhonenumber}
          helperText={regexObj.phonenumberHelper}
          size='small' />

        <button className='btn-signup' onClick={submit}>Signup</button>
    </div>
  )
}

export default Signup