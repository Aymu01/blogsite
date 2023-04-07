import React from 'react';
import Blog from '../blog/blog';
import { Data } from '../data/data';
import './blogPage.scss';
import SweetPagination from "sweetpagination";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import {BiSearch} from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { Paginator } from 'primereact/paginator';

function BlogPage() {
  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());
  const {blogData} = useSelector(state => state.userDataFunc);
  console.log(blogData);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  const onPageChange = (event) => {
      setFirst(event.first);
      setRows(event.rows);
  };
  return (
    <div >
    <Navbar />
    <div className='page'>
      <div className="title">Blog</div>
      <div className="search">
        <input type="text" placeholder='Kitab adını daxil edin' />
        <div className="search-icon"><BiSearch /></div>
      </div>
      <div className="blogs">
      {
        Data.slice(first,first+rows).map(blog => (
          <Link className="link" to={`/blog/${blog.id}`}>
          <Blog blog={blog}/>
          </Link>
        ))
      }
      </div>
      {/* <SweetPagination
        currentPageData={setCurrentPageData}
        dataPerPage={2}
        getData={Data}
        navigation={true}
      /> */}
        <div className="card">
            <Paginator first={first} rows={rows} totalRecords={Data.length} rowsPerPageOptions={[2,5]} onPageChange={onPageChange} />
        </div>
    </div>
    <div className='footer'>
          <Footer />
        </div>
    </div>
  )
}

export default BlogPage