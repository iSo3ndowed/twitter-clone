import React, { useState, useEffect } from 'react'
import { FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';
import './Login.css'
import { GoogleSignInApi, LoginAPI } from '../api/AuthAPI';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebaseConfig'
import toast from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = async () => {
        try {
            let res = await LoginAPI(email, password)
            toast.success('Welcome to Twitter')
            navigate('/')
        } catch (err) {
            toast.error('Email/Password error')
    }
}

    const googleSignIn = async () => {
        let response = await GoogleSignInApi()
        toast('Welcome to Twitter')
        navigate('/')
    }

    useEffect(() => {
        onAuthStateChanged(auth, (res) => {
          if (res?.accessToken) {
            navigate('/')
          }
        })
      }, [])

  return (
    <>
    
    <div className='login-container'>
        <div className="login-page">
                    <FaTwitter fontSize='30px'/>
                    <h1>Sign in to Twitter</h1>
                    <span onClick={googleSignIn}><FcGoogle/>Sign in with Google</span>
                    <span><AiFillApple/>Sign in with Apple</span>
                    <div className='header__center'>OR
                    </div>
                    <input type="email" placeholder='Email or Username' onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
                    <span onClick={login}>Sign in</span>
                    <span>Forgot password?</span>
                    <p>Don't have an account? <a onClick={() => navigate ('/SignUp')}>Sign Up</a></p>
                </div>
            </div>
    </>
  )
}

export default Login