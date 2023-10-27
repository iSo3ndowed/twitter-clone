import React, { useMemo, useState } from 'react'
import './Home.css'
import { BiPoll } from 'react-icons/bi'
import { AiOutlinePicture, AiOutlineFileGif } from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5'
import { TbCalendarStats } from 'react-icons/tb'
import { VscSmiley } from 'react-icons/vsc'
import avatar1 from './images/avatar1.JPG'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';
import { MdOutlineKeyboardDoubleArrowUp, MdOutlineKeyboardArrowDown, MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'
import { FiUsers } from 'react-icons/fi'
import { RiNotification2Line } from 'react-icons/ri'
import { BsBookmark, BsTwitter } from 'react-icons/bs'
import { CgLogOff } from 'react-icons/cg'
import { MdNumbers } from 'react-icons/md'
import { BsPlusCircle } from 'react-icons/bs'
import { HiUser, HiOutlineDotsCircleHorizontal, HiOutlineMail } from 'react-icons/hi'
import { logOut } from '../api/AuthAPI'
import { tweetStatus, getTweets } from '../api/firesStoreAPI'
import TweetComponent from './TweetComponent'
import Logo from '../Logo'


const Home = () => {
  const [getTweetStatus, setGetTweetStatus] = useState([])
  const [ActiveNav, setActiveNav] = useState('#ForYou')
  const [SignOut, setSignOut] = useState(false)
  const [tweet, setTweet] = useState('')
  const [activeMsg, setActiveMsg] = useState(false)
  const [modal, setModal] = useState(false)
  const [postStatus, setPostStatus] = useState('')


  
  const onLogout = () => {
    logOut()
    toast.success('Logged Out Successfully')
  }
  
  const sendTweet = async () => {
    await tweetStatus(tweet)
    await setTweet('')
    setPostStatus('')
    toast.success('Flip sent')    
  }

  useMemo(() => {
    getTweets(setGetTweetStatus)
  },[])


    return (
      <>
      <div className='home'>
        <div className='home-container'>

        </div>
        <div className='Navbar_head'>
          <div className='mobile-user'>
          </div>
          <div className='logout'>
            {SignOut && 
            <div className='mobile-sidebar'>
              <div className='mobile-user-sidebar'>
                <h4>Account info</h4>
                <IoClose style={{color: 'white', cursor: 'pointer', fontSize: '22px'}} onClick={() => setSignOut(!SignOut)}/>
              </div>
              <div className='mobile-user-sidebar'>
              <img src={avatar1} alt="" />
                <BsPlusCircle style={{color: 'white', cursor: 'pointer', fontSize: '20px'}}/>
              </div>
                <div className='user-detail'>
                  <div className='username-info'>
                    <h3>III</h3>
                    <p>@iSo3ndowed</p>
                  </div>
                  <div className='user-followers'>
                    <div className='followers-info'>
                      <h4>1,999</h4>
                      <p>Following</p>
                    </div>
                    <div className='followers-info'>
                      <h4>234</h4>
                      <p>Followers</p>
                    </div>
                  </div>
                </div>
                <hr/>
              <div className='sidebar-links'>
                <Link to='./Explore' style={{color: 'white', textDecoration: 'none', fontSize:'1.4rem'}}><li><MdNumbers/>explore</li></Link>
                <Link to='./Communities' style={{color: 'white', textDecoration: 'none', fontSize:'1.4rem'}}><li><FiUsers/>communities</li></Link>
                <Link to='./Notifications' style={{color: 'white', textDecoration: 'none', fontSize:'1.4rem'}}><li><RiNotification2Line/>notifications</li></Link>
                <Link to='./Messages' style={{color: 'white', textDecoration: 'none', fontSize:'1.4rem'}}><li><HiOutlineMail/>messages</li></Link>
                <Link to='./Bookmarks' style={{color: 'white', textDecoration: 'none', fontSize:'1.4rem'}}><li><BsBookmark/>bookmarks</li></Link>
                <Link to='./Profile' style={{color: 'white', textDecoration: 'none', fontSize:'1.4rem'}}><li><HiUser/>topics</li></Link>
                <Link to='./More' style={{color: 'white', textDecoration: 'none', fontSize:'1.4rem'}}><li><HiOutlineDotsCircleHorizontal/>more</li></Link>
                <li onClick={onLogout}><CgLogOff/>Sign Out</li>
              </div>
              <hr/>
            </div>}
          </div>
          <div className='header-flex'>
            <h3 className='header-name'>Home</h3>
            <div className='header-user'>
              <div className='userpicture-tab'>
                <img src={avatar1} alt="" onClick={() => setSignOut(!SignOut)}/>
              </div>
            </div>
            <div className='logo-tab'>
              <div>
                  <h3 className='header-logo'><Logo style={{fontSize: '22px'}}/></h3>
              </div>
              <ul>
                <li className={ActiveNav === '#ForYou' ? 'active' : ''} onClick={() => setActiveNav('#ForYou')}><Link to='./ForYou' style={{color: 'white', textDecoration: 'none'}}>For You</Link></li>
                <li className={ActiveNav === '#Following' ? 'active' : ''} onClick={() => setActiveNav('#Following')}><Link to='./Following' style={{color: 'white', textDecoration: 'none'}}>Following</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='input-tab'>
          <img src={avatar1} alt="" />
        <div className='input-flex'>
          <div className="input">
            <textarea type="text" placeholder='Tell me...Wetin dey happen?' 
            onChange={(event) => setPostStatus(event.target.value)}
            value={postStatus}
            tweet={tweet}
            />
            <div className="icons">
              <ul>
                <li><AiOutlinePicture/></li>
                <li><AiOutlineFileGif/></li>
                <li><BiPoll/></li>
                <li><VscSmiley/></li>
                <li><TbCalendarStats/></li>
                <li><IoLocationOutline/></li>
              </ul>
              <div className="tweet-btn">
                <button
                onClick={sendTweet} 
                disabled={postStatus === '' ? true : false}>Tweet</button>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* 
      {getTweetStatus.map((tweet) => {
        return 
        <>
        <p>{tweet.status}</p>
        </>
      })} */}
      {ActiveNav === '#ForYou' ? 
      <div>
        <h1>For You</h1>
        </div> : 
        <h1>Following</h1>}
      </div>
      <div className='floating-messages'>
        <div className='message-flex'>
          <div>
            <h3>Messages</h3>
          </div>
          <div className='floating-icons' onClick={() => setActiveMsg(!activeMsg)} >
            <HiOutlineMail fontSize='22px' cursor='pointer'/>
            {activeMsg ? <MdOutlineKeyboardDoubleArrowDown fontSize='23px' cursor='pointer'/> : <MdOutlineKeyboardDoubleArrowUp fontSize='23px' cursor='pointer'/>}
          </div>
          <hr></hr>
        </div>
        {activeMsg && <div className='direct-messages-list'>
          <h1>olumide</h1>
          <p>i hereby</p>
        </div>}
      </div>
      <TweetComponent 
      postStatus={postStatus} 
      setPostStatus={setPostStatus} 
      setModal={setModal} 
      modal={modal} />
       
    </>
    )
}

export default Home