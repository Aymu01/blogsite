import React, { useState } from 'react'
import View from '../view/view';
import { Data } from '../data/data';
import { ImFacebook } from 'react-icons/im';
import { BsGithub } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import Com from '../write-com/com';
import Comment from '../comments/comment';
import ReplyCom from '../comments/replyCom';
import './blogInfo.scss'
import { useSelector } from 'react-redux';
function BlogInfo() {
   const { id } = useParams();
   const [reply,setReply] = useState(false);
   const {blogData} = useSelector(state => state.userDataFunc);
   console.log(blogData);
   console.log(id);
   return (
      <div >
         <Navbar />
         <div className="all-info">
      <div className='info'>
         {
            Data.map((data) => (
               data.id === id
               &&
               <div>
               <div className="blog-info">
                  <div className="blog-name">{data.title}</div>
                  {/* <View blog={data} /> */}
                  {/* <div className="image">
                     <img src={URL.createObjectURL(data.files[0])} alt="" />
                  </div> */}
                  <div className="image">
                     <img src={data.image} alt="" />
                  </div> 
                  <div className="blog-text">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id laborum dolorem possimus consequuntur asperiores porro ex sint. Ducimus reiciendis dolore sunt eos impedit mollitia, minus expedita quo provident doloremque natus deserunt nobis quibusdam, debitis magni sed officiis, modi hic blanditiis non voluptates molestias beatae? Sit rerum repellat voluptas nam explicabo vitae corrupti labore. Nam corporis similique quaerat animi nobis. Quidem, perspiciatis minima. Nobis aut rem delectus veniam voluptatum mollitia reprehenderit molestias cumque. Hic, ducimus quidem repellat eius illum dolor nisi delectus provident, at labore quas sed et neque? Autem similique a sint nulla recusandae eligendi laudantium nesciunt rerum animi?
                     </div>
               </div>
                 <div className="other">
                 <div className="share">Paylaş <BsGithub className='icon git'/> <ImFacebook className='icon face'/> <BsTwitter className='icon twitter'/> <TbWorld className='icon world'/></div>
                 <div className="topics">
                 <div className="sim-topic">Açar söz :</div>
                 <div className="topic">
                    {/* {data.newKey.map(key => (
                     key !== "" &&
                     <div>{key}</div>
                    ))} */}
                 </div>
              </div>
              </div>
              <div className="num-com">1 şərh</div>
              <div className="comments">
               <Comment changeReply={reply => setReply(reply)}/>
              </div>
              {
                 reply 
                 &&
                 <ReplyCom changeReply={reply => setReply(reply)}/>
              }
              </div>
            ))
         }
       
         <div className="comment-write">
          <Com />
         </div>
      </div>
      </div>
      <div className='footer'>
          <Footer />
        </div>
      </div>

   )
}

export default BlogInfo;