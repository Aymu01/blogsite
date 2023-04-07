import React, { useState } from 'react'
import MenuImage from './image/menu (2).png';
import Logo from './image/Kitab Blogu.png';
import {TbWorld} from 'react-icons/tb';
import Sidebar from '../sidebar/sidebar';
import './navbar.scss'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import User from '../image/user.png'
function Navbar() {
  const [open,setOpen] = useState(false);
  const openClose = () => {
    setOpen(!open);
  };
  const {entry} = useSelector(state => state.userDataFunc);
  return (
    <div className='nav-menu'>
    <div className='navbar'>
      <div className="left">
        <div className="menu-logo" onClick={openClose}>
        <img src={MenuImage} alt="" />
        </div>
        <Link className="site-logo" to="/">
         <img src={Logo} alt="" style={{width:"120px",height:"40px"}} />
        </Link>
        </div>
        <div className="menu">
         <Link className='menu-title' to="/" >Ana Səhifə</Link> 
         <Link className='menu-title' to="/blog">Blog</Link>
        </div>
        <div className="right">
        <div className="lang"><TbWorld /> EN</div>
        {
          entry.length === 0
          ?
          <div className="join">
          <Link className="log-sign" to='/login'>Daxil ol</Link>
          <Link className="log-sign" to='/sign'>Qeydiyyat</Link>
          <Link className="mob-join" to="/login">Qoşul</Link>
        </div>
        :
        <div className="user">
            <div className="user-photo"><img src={User} alt="" /></div>
            <div className="user-name">{entry[0].fullname}</div>
        </div>
        }
        
        </div>
    </div>
    <div className={open ? "menu-cards active" : "menu-cards"}>
     <Sidebar openClose = {openClose}/>
    </div>
    </div>
  )
}

export default Navbar;