import React, { useState } from 'react'
import { AiOutlinePicture, AiOutlineFileGif } from 'react-icons/ai'
import './Home.css'
import { BiPoll } from 'react-icons/bi'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { TbCalendarStats } from 'react-icons/tb'
import { VscSmiley } from 'react-icons/vsc'
import { IoLocationOutline } from 'react-icons/io5'
import { tweetStatus } from '../api/firesStoreAPI'
import avatar1 from './images/avatar1.JPG'
import { toast } from 'react-hot-toast'
import './Home.css'



const TweetComponent = ({ setModal, modal, modalOpen, status }) => {
    const [tweet, setTweet] = useState('')
    const [postStatus, setPostStatus] = useState('')

      
  const sendTweet = async () => {
    await tweetStatus(status)
    await setTweet('')
    setModal(false)
    setPostStatus('')
    toast.success('Flip sent')   
  }


  return (
    <>
      {modal && 
      <div className='modal-wrapper'>
        <div
        className='modal-header'>
          <IoIosArrowRoundBack onClick={modalOpen} color='black' fontSize='1.5rem' cursor='pointer'/>
          <button className='modal-btn'
          onClick={sendTweet} 
          tweet={tweet}
          disabled={postStatus === '' ? true : false}>Tweet</button>
        </div>
      <div className='modal-flex'>
        <div className="input">
          <div className='modal-input'>
            <img src={avatar1} alt="" />
            <textarea type="text" placeholder='Tell me...Wetin dey happen?' 
            onChange={(event) => setPostStatus(event.target.value)}
            value={postStatus}
            />
          </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>}
    </>
  );
};

export default TweetComponent;