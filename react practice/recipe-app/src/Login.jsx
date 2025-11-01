import { Link, Navigate, useNavigate } from 'react-router-dom'
import './App.css'
import React, { useState } from 'react'


const Login = ({info,updateInfo}) => {

  const navigate = useNavigate()
 let [input,SetInput]=   useState({
  email:"",
  password:""
 })  
  const openHomePage = () =>{
    // if(info.email===input.email && info.password===input.password){
    //   alert("Login Successfully!")
      navigate('/home')
    // }else{
    //   alert("Try again!")
    // }
    console.log(info.name)

    
    // updateInfo({...info,name:"anu"})
    // console.log("jii",info.name)
  }
  console.log(input)
  const getDetail = (e) =>{
    let  {name,value}= e.target
    SetInput({...input,[name]:value})
  }

  return (
    <div id='login'>
      <div id='login-container'>
        <div id='left-login'>
        <img src='profile.png'/>
        <p>Login</p>
      </div>
      <div id='right-login'>
        <div id='detail'>
          <p>UserName</p>
          <input name='email' value={input.email} onChange={getDetail} type='email' placeholder='abc@gmail.com'/>
          <p>Password</p>
          <input name='password' value={input.password} onChange={getDetail} type='password' placeholder='Enter password' />
        </div>
        <div id='pass'>
          <div>
            <input type='checkBox'/>
            <p>Remember me</p>
          </div>
          <p id='for-pass'>Forget Password?</p>
        </div>
        <button onClick={openHomePage}>Login</button>
        <p>
          <Link id='link' to={'/signup'} >Signup</Link>
          or sign in with
        </p>
        <div id='logo'>
          <img src='facebook.png' />
          <img src='google.png' />
          <img src='twitter.png' />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Login
