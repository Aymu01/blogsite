import React, { useState } from 'react';
import User from '../image/user.png';
function ReplyCom({changeReply}) {
    const [value,setValue] = useState("");
  return (
    <div className='replyCom'>
       <div className="image">
           <img src={User} alt="" />
       </div>
      <form>
        <input type="text" placeholder='Cavab əlavə edin' onChange={(e) => setValue(e.target.value)} />
        <button disabled={value === "" && "disabled"} >Cavab ver</button>
        <button onClick={() => changeReply(false)}>Ləğv et</button>
      </form>
    </div>
  )
}

export default ReplyCom;
