import React from 'react'
import './comment.scss'
import User from '../image/user.png'
function Comment({changeReply}) {
  return (
    <div>

      <div className="comment">
        <div className="image">
            <img src={User} alt="" />
            </div>
        <div className="com-body">
        <div className="com-text">
          <div className="title">Aygun Musayeva</div>
          <div className="com"> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
        </div>
        <div className="com-replay" onClick={() => changeReply(true)}>Cavab ver</div>
        </div>
      </div>
    </div>
  )
}
export default Comment;
