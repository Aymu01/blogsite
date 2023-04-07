import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import './sidebar.scss'
import { Link } from 'react-router-dom';

function Sidebar({openClose}) {
    return (
        <div className='menu-card'>
            <div className="close" onClick={openClose}><AiOutlineClose /></div>
            <div className="menu-title">
                <Link  className="title" to="/">Ana Səhifə</Link>
                <Link  className="title" to="/blog">Blog</Link>
            </div>
            <div className="choose">
                <Link className='post' to="/blog">Sadəcə oxu və fikir bildir</Link>
                <Link className='creator' to="/content">Blog yarat</Link>
            </div>
            <form className="lang-menu">
                <div>
                <label htmlFor="en">
                <input type="radio" id="en" name="lang" value="EN" />
                <span>EN</span>
                </label>
                </div>
                <div>
                <label htmlFor="az">
                <input type="radio" id="az" name="lang" value="AZ" />
                <span>AZ</span>
                </label>
                </div>
                <div>
                <label htmlFor="ru">
                <input type="radio" id="ru" name="lang" value="RU" />
                <span>RU</span>
                </label>
                </div>
            </form>
        </div>
    )
}

export default Sidebar