import React from 'react';
import './home.scss';
import { Link } from 'react-router-dom';
import star from './home-image/plus.png';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
function Home() {
  return (
    <div>
    <Navbar />
    <div className='home'>
      <div className="first">
      <p className="main-message">
        Kitablar haqqında bloglar yaza və oxuya bilərsiniz
        <img src={star} alt="" />
      </p>
      <p className="choose-message">
        Seçim edin və səhifəmizdən zövq alın
      </p>
      <div className="choose">
        <Link className='post'>Sadəcə oxu və fikir bildir</Link>
        və ya
        <Link className='creator' to="/content">Blog yarat</Link>
      </div>
      </div>
    </div>
    <div className='footer'>
          <Footer />
        </div>
    </div>
  )
}

export default Home
