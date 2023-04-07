import React from 'react';
import { Link} from 'react-router-dom';
import './join-header.scss'
function JoinHeader({log}) {
    return (
        <div>
            <div className='log-header'>
                <Link to="/login" className={log === "log" ? "click button" : "button"}>Daxil ol</Link>
                <Link to="/sign" className={log === "sign" ? "click button" : "button"}>Qeydiyyat</Link>
            </div>
        </div>
    )
}

export default JoinHeader;
