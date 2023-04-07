import React from 'react';
import './view.scss'
import {AiOutlineEye} from 'react-icons/ai';
function View({blog}) {
  return (
    <div>
       <div className="other-info">
        <div className="dataTime">{blog?.dateTime}</div>
        <div className="read"><AiOutlineEye />{blog?.view} oxunma</div>
      </div>
    </div>
  )
}
export default View;
