import React, { useState } from 'react'
import { LoginForm } from './components/loginForm'
import image from'../../public/logo.png'
import { RegisterForm } from './components/registerForm';
export const LoginPage = () => {
  const [loginState, setloginState] = useState("login");
  return (
    <div className='grid grid-cols-2'>
      <div className='form flex justify-center items-center h-[100vh] px-24'>
        {
          loginState == "login" ? <LoginForm setloginState={setloginState} /> : <RegisterForm setloginState={setloginState} />
        }
        
      </div>
      <div className='login-background flex justify-center items-center' >
        <img src={image}  style={{width:"350px"}}/>
      </div>
    </div>
  )
}
