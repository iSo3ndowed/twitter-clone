import React from 'react'
import './App.css';
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Trending from './components/Trending'
import Loader from './components/Router-Links/Loader';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebaseConfig';
import { useEffect } from 'react'
import { useState } from 'react';



const HomeComponent = () => {
  let navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken) {
        navigate('/')
      } else {
        setLoading(false)
      }
    })
  }, [])

  return loading ? <Loader/> : (
    <div className="App">
        <Navbar/>
        <Outlet/>
        <Trending/>
    </div>
  )
}

export default HomeComponent