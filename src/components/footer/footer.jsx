import React from 'react'
import {FiFacebook} from 'react-icons/fi';
import {BsInstagram} from 'react-icons/bs';
import {TbBrandTelegram} from 'react-icons/tb';
import './footer.scss'
function Footer() {
  return (
    <footer>
    <div className="social-media">
         <div><FiFacebook /></div>
         <div><BsInstagram /></div>
         <div><TbBrandTelegram /></div>
    </div>
    </footer>
  )
}


export default Footer;