import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';

const SignUp = () => {
  const navigate = useNavigate()
  return (
    <div className='login-container'>
        <div className="login-page">
            <FaTwitter fontSize='30px'/>
            <h1>Join Twitter today</h1>
            <span><FcGoogle/>Sign up with Google</span>
            <span><AiFillApple/>Sign up with Apple</span>
            <div className='header__center'>OR
            </div>
            <span onClick={() => navigate ('/Register')}>Create account</span>
            <p>Already have an account? <a onClick={() => navigate('/Login')}>Sign in</a></p>
        </div>
    </div>
  )
}

export default SignUp