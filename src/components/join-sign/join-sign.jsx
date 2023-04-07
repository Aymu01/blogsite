import React from 'react';
import Login from '../login/login';
import otherLogo from '../image/7.png';
import './join-sign.scss';
import JoinHeader from '../join-header/join-header';
import JoinNav from '../navbar/join_nav';
function JoinSign() {

    return (
        <div>
            <div className='join'>
                   <JoinNav sign="sign"/>
                   <div className='main'>
                <div className="main-left">
                        <div className="other-logo">
                            <img src={otherLogo} alt="" />
                        </div>
                    </div>
                    <div className="main-rigth">
                        <div className="mob">
                        <JoinHeader log="sign" />
                        </div>
                        <div className="comp">
                            <h3>Sign up</h3>
                        </div>
                        <Login sign="sign" />
                    </div>
                </div>      
            </div>
        </div>
    )
}

export default JoinSign;