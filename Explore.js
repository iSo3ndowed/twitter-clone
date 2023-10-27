import React from 'react'

import { FiSettings } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { BiSearch, BiDotsHorizontalRounded } from 'react-icons/bi';
import './Explore.css'

const Explore = () => {
  const Trends = [
    {
      Trending_Country: 'Nigeria',
      Trending_Counts: '2,001,000',
      Trending_Topic: 'iSo3ndowed',
    }
  ]
   return (
    <div className='explore'>
        <div className="explore_header">
          <div className="trends_user">
            <FaUserCircle/>
          </div>
          <div className="nav-input">
            <BiSearch/>
            <input type="text" placeholder='Search Twitter'/>
          </div>
          <div className="settings">
            <FiSettings cursor='pointer'/>
          </div>
        </div>
        <div className="Trends">
          <h2>Trends for you</h2>
          <div className="Trend_list">
            <div className="list">
              {Object.keys(Trends).map((key) => {
                <h1>{Trends.tr}</h1>
              })}
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
          
          <div className="Trend_list">
            <div className="list">
              <p>Trending in Nigeria</p>
              <h5>#Twitter_Clone</h5>
              <p>1,201,768 Tweets</p>
            </div>
            <BiDotsHorizontalRounded cursor='pointer'/>
          </div>
        
          <div className="Trend_list">
            <div className="list">
              <p>Trending in Switzerland</p>
              <h5>#Twitter_Clone</h5>
              <p>1,201,768 Tweets</p>
            </div>
            <BiDotsHorizontalRounded cursor='pointer'/>
          </div>
          
          <div className="Trend_list">
            <div className="list">
              <p>Trending in Canada</p>
              <h5>#Twitter_Clone</h5>
              <p>1,201,768 Tweets</p>
            </div>
            <BiDotsHorizontalRounded cursor='pointer'/>
          </div>
        </div>
    </div>
  )
}

export default Explore