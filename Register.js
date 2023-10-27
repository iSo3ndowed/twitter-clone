import React, { useState } from 'react'
import './Login.css'
import { BsArrowLeft } from 'react-icons/bs';
import { SignUpAPI } from '../api/AuthAPI'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [Register, setRegister] = useState('')


    const signUp = async () => {
        try {
            let res = await SignUpAPI(email, password)
            toast.success('Account Created Successfully')
            navigate('/Login')
        } catch (err) {
            toast.error('Error...Please check details')
    }
}

  return (
        <div className='login-container'>
            <div className='signup-container'>
                <div className='close-btn'>
                    <BsArrowLeft onClick={() => navigate(-1)} style={{color: 'white', fontSize: '18px', cursor: 'pointer'}}/>
                </div>
                <div className='signup-details'>
                    <h3>Step 1 of 5</h3>
                    <h1>Create your account</h1>
                    <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)}/>
                    <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                    <h5>Date of birth:</h5>
                    <input type="date" onChange={(e) => setDate(e.target.value)}/>
                    <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
                    <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
                    <input type="Password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                    <span onClick={signUp}>Register</span>
                </div>
            </div>
    </div>
    
  )
}

export default Register