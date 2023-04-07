import React from 'react';
import './blog.scss';
import View from '../view/view';

function Blog({blog}) {
  return (
    <div className='blog'>
      <div className="image">
      {/* <img src={URL.createObjectURL(blog.files[0])} alt="" /> */}
      <img src={blog.image} alt="" />
         <div></div>
      </div>
      <div className="alt">
      <div className="name">{blog.title}</div>
     {/* <View blog={blog}/> */}
      </div>
     
    </div>
  )
}

export default Blog;