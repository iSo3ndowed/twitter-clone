import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs';



const ForYou = () => {
  const navigate = useNavigate()
  return (
    <div className='ForYou'>
        <div className='close-btn'>
            <BsArrowLeft onClick={() => navigate(-1)} style={{color: 'white', fontSize: '18px', cursor: 'pointer'}}/>
        </div>
    </div>
  )
}

export default ForYou
