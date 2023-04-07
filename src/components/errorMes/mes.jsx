import React from 'react';
import './mes.scss'

function Mes({message}) {
  return (
    <div>
      {message !== "" && <div className="message">{message}</div>}
    </div>
  )
}

export default Mes;
