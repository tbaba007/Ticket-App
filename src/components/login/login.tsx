import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  UserLogin,
  LoginButton,
  Logo,
  Name,
  LoginHeader,
  LoginInstructions,
  LoginEmailInput,
  LoginPasswordlInput,
  EmailName,
  PasswordName,
  LoginContainer,
  ForgotPasswordLink
} from "./styles";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isEmailValid, saveMessage } from "../../helper/Common";

export default function Login () {
 const [email,setEmail]=useState('');
 const [password,setPassword]=useState('');
 const history = useNavigate();

  const onLogin=()=>{
    if(!email.trim()){
      toast("Please enter email");
      return;
    }
    if(!password){
      toast("Please enter password");
      return;
    }
    if(email.trim()){
      if(!isEmailValid(email)){
        toast("Please enter a valid email");
        return;
      }
    }
    saveMessage('user',email);
    history("/overview")
  }



  return (
    <Container>
      <UserLogin>
        <Logo />
        <Name>Danny Dribble</Name>
        <LoginHeader>Log In to Danny D</LoginHeader>
        <LoginInstructions>Enter your email and password below</LoginInstructions>
        <LoginContainer>
        <EmailName htmlFor="email">Email </EmailName>
        <LoginEmailInput placeholder="Email address" name="email" onChange={(e)=>setEmail(e.target.value)}/>
        <PasswordName >Password</PasswordName>
        <ForgotPasswordLink>Forgot Password?</ForgotPasswordLink>
        <LoginPasswordlInput placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        </LoginContainer>
       
        <LoginButton onClick={onLogin}>Log In</LoginButton>
      </UserLogin>
      <ToastContainer/>
    </Container>
  );
};

