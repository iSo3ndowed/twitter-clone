import React, { useState } from 'react'
import { BiHomeCircle } from 'react-icons/bi'
import { FiUsers, FiPlus } from 'react-icons/fi'
import { RiQuillPenLine } from 'react-icons/ri'
import { AiOutlineSearch } from 'react-icons/ai'
import { RiNotification2Line } from 'react-icons/ri'
import { BsBookmark, BsTwitter, BsPlusCircle } from 'react-icons/bs'
import { CgLogOff } from 'react-icons/cg'
import { MdNumbers } from 'react-icons/md'
import { HiUser, HiOutlineDotsCircleHorizontal, HiOutlineMail } from 'react-icons/hi'
import './Navbar.css'
import avatar1 from './Router-Links/images/avatar1.JPG'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { logOut } from './api/AuthAPI'
import { toast } from 'react-hot-toast'
import Home from './Router-Links/Home'
import TweetComponent from './Router-Links/TweetComponent'
import Logo from './Logo'


const Navbar = () => {
  const navigate = useNavigate()
  const [ActiveNav, setActiveNav] = useState('#')
  const [SignOut, setSignOut] = useState(false)
  const [modal, setModal] = useState(false)

  const onLogout = () => {
    logOut()
    toast.success('Logged Out Successfully')
  }

  const modalOpen = () => {
    setModal(!modal)
  }


  return (
    <div className='Navbar'>
        <div className='sticky_links'>
          <Link to='./ForYou' style={{color: 'white', textDecoration: 'none'}}><li>For you</li></Link>
          <Link to='./Following' style={{color: 'white', textDecoration: 'none'}}><li>Following</li></Link>
        </div>
        {/* Desktop Navigation bar */}
        <ul className='desktop_tab'>
        <h1 className='Navbar_logo'>
          <Logo/>
        </h1>
            <Link to='/' style={{color: 'white', textDecoration: 'none', fontSize:'1.4rem'}}><li><BiHomeCircle/>home</li></Link>
            <Link to='./Explore' style={{color: 'white', textDecoration: 'none', fontSize:'1.4rem'}}><li><MdNumbers/>explore</li></Link>
            <Link to='./Communities' style={{color: 'white', textDecoration: 'none', fontSize:'1.4rem'}}><li><FiUsers/>communities</li></Link>
            <Link to='./Notifications' style={{color: 'white', textDecoration: 'none', fontSize:'1.4rem'}}><li><RiNotification2Line/>notifications</li></Link>
            <Link to='./Messages' style={{color: 'white', textDecoration: 'none', fontSize:'1.4rem'}}><li><HiOutlineMail/>messages</li></Link>
            <Link to='./Bookmarks' style={{color: 'white', textDecoration: 'none', fontSize:'1.4rem'}}><li><BsBookmark/>bookmarks</li></Link>
            <Link to='./Profile' style={{color: 'white', textDecoration: 'none', fontSize:'1.4rem'}}><li><HiUser/>profile</li></Link>
            <Link to='./More' style={{color: 'white', textDecoration: 'none', fontSize:'1.4rem'}}><li><HiOutlineDotsCircleHorizontal/>more</li></Link>
            <button onClick={modalOpen}>tweet</button>
        </ul>
        {/* //Tablet Navigation bar */}
        <ul className='tablet_tab'>
        <h1 className='Navbar_logo'><BsTwitter/></h1>
            <Link to='/' style={{color: 'white', textDecoration: 'none'}}><li><BiHomeCircle/></li></Link>
            <Link to='./Search' style={{color: 'white', textDecoration: 'none'}}><li><AiOutlineSearch/></li></Link>
            <Link to='./Communities' style={{color: 'white', textDecoration: 'none'}}><li><FiUsers/></li></Link>
            <Link to='./Notifications' style={{color: 'white', textDecoration: 'none'}}><li><RiNotification2Line/></li></Link>
            <Link to='./Messages' style={{color: 'white', textDecoration: 'none'}}><li><HiOutlineMail/></li></Link>
            <Link to='./Bookmarks' style={{color: 'white', textDecoration: 'none'}}><li><BsBookmark/></li></Link>
            <Link to='./Profile' style={{color: 'white', textDecoration: 'none'}}><li><HiUser/></li></Link>
            <Link to='./More' style={{color: 'white', textDecoration: 'none'}}><li><HiOutlineDotsCircleHorizontal/></li></Link>
            <RiQuillPenLine style={{fontSize:'1.5rem', backgroundColor: '#1A8CD8', borderRadius: '100%', padding: '12px 12px', cursor: 'pointer'}} />
        </ul>
        {/* //Mobile Navigation bar */}
        <ul className='mobile_tab'>
            <Link to='/' style={{color: 'white', textDecoration: 'none'}}><li className={ActiveNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')}><BiHomeCircle/></li></Link>
            <Link to='./Search' style={{color: 'white', textDecoration: 'none'}}><li className={ActiveNav === '#Search' ? 'active' : ''} onClick={() => setActiveNav('#Search')}><AiOutlineSearch/></li></Link>
            <Link to='./Communities' style={{color: 'white', textDecoration: 'none'}}><li className={ActiveNav === '#User' ? 'active' : ''} onClick={() => setActiveNav('#User')}><FiUsers/></li></Link>
            <Link to='./Notifications' style={{color: 'white', textDecoration: 'none'}}><li className={ActiveNav === '#Notification' ? 'active' : ''} onClick={() => setActiveNav('#Notification')}><RiNotification2Line/></li></Link>
            <Link to='./Messages' style={{color: 'white', textDecoration: 'none'}}><li className={ActiveNav === '#Messages' ? 'active' : ''} onClick={() => setActiveNav('#Messages')}><HiOutlineMail/></li></Link>
        </ul>
        <div className='sticky_button'>
              <FiPlus style={{fontSize:'1.5rem', backgroundColor: '#1A8CD8', borderRadius: '100%', padding: '12px 12px', cursor: 'pointer'}} onClick={modalOpen} />
        </div>
        <div className='Nav-user'>
          <div className='user-info'>
            <img src={avatar1} alt="" />
            <div className='username-info'>
              <h3>III</h3>
              <p>@iSo3ndowed</p>
            </div>
          </div>
          <BiDotsHorizontalRounded cursor='pointer' onClick={() => setSignOut(!SignOut)}/>
        </div>
        <div className='logout'>
            {SignOut && 
            <div className='pop-up-desktop'>
              <small><BsPlusCircle/>Add another account</small>
              <small><BsPlusCircle/>Add existing account</small>
              <small><BsPlusCircle/>Create new account</small>
              <small onClick={onLogout}><CgLogOff/>Sign Out</small>
            </div>}
        </div>
        <TweetComponent modal={modal} modalOpen={modalOpen} setModal={setModal}/>
    </div>
  )
}

export default Navbar