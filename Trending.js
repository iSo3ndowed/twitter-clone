import React from 'react'
import './Trending.css'
import { FiSettings } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { BiSearch, BiDotsHorizontalRounded } from 'react-icons/bi';


const Trending = () => {
  const Trends = [
    {
      Trending_Country: 'Nigeria',
      Trending_Counts: '2,001,000',
      Trending_Topic: 'iSo3ndowed',
    }
  ]

  return (
    <div className='trending'>
      <div className='region'>
        <h3>Trending by region</h3>
      </div>
      <div className='explore_'>
        <div className="Trends_">
          <h2>Trends for you</h2>
          <div className="Trend_list">
            <div className="list">
              <p>Trending in China</p>
              <h5>#Twitter_Clone</h5>
              <p>1,201,768 Tweets</p>
            </div>
            <BiDotsHorizontalRounded cursor='pointer'/>
          </div>
          <div className="Trend_list">
            <div className="list">
              <p>Trending in Australia</p>
              <h5>#Twitter_Clone</h5>
              <p>1,201,768 Tweets</p>
            </div>
            <BiDotsHorizontalRounded cursor='pointer'/>
          </div>
          <div className="Trend_list">
            <div className="list">
              <p>Trending in Australia</p>
              <h5>#Twitter_Clone</h5>
              <p>1,201,768 Tweets</p>
            </div>
            <BiDotsHorizontalRounded cursor='pointer'/>
          </div>
          <div className="Trend_list">
            <div className="list">
              <p>Trending in Australia</p>
              <h5>#Twitter_Clone</h5>
              <p>1,201,768 Tweets</p>
            </div>
            <BiDotsHorizontalRounded cursor='pointer'/>
          </div>
          <div className="Trend_list">
            <div className="list">
              <p>Trending in Australia</p>
              <h5>#Twitter_Clone</h5>
              <p>1,201,768 Tweets</p>
            </div>
            <BiDotsHorizontalRounded cursor='pointer'/>
          </div>
          <div className="Trend_list">
            <div className="list">
              <p>Trending in Australia</p>
              <h5>#Twitter_Clone</h5>
              <p>1,201,768 Tweets</p>
            </div>
            <BiDotsHorizontalRounded cursor='pointer'/>
          </div>
          <div className="Trend_list">
            <div className="list">
              <p>Trending in Australia</p>
              <h5>#Twitter_Clone</h5>
              <p>1,201,768 Tweets</p>
            </div>
            <BiDotsHorizontalRounded cursor='pointer'/>
          </div>
          <div className="Trend_list">
            <div className="list">
              <p>Trending in Australia</p>
              <h5>#Twitter_Clone</h5>
              <p>1,201,768 Tweets</p>
            </div>
            <BiDotsHorizontalRounded cursor='pointer'/>
          </div>
        
          <div className="Trend_list">
            <div className="list">
              <p>Trending in Nigeria</p>
              <h5>#iSo3ndowed</h5>
              <p>1,201,768 Tweets</p>
            </div>
            <BiDotsHorizontalRounded cursor='pointer'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending