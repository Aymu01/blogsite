import React from 'react';
import Login from '../login/login';
import otherLogo from '../image/7.png';
import './join-login.scss';
import JoinHeader from '../join-header/join-header';
import JoinNav from '../navbar/join_nav';
function JoinLogin() {

    return (
        <div>
            <div className='join'>
                 <JoinNav />
                <div className='main'>
                <div className="main-left">
                        <div className="other-logo">
                            <img src={otherLogo} alt="" />
                        </div>
                    </div>
                    <div className="main-rigth">
                        <div className="mob">
                            <JoinHeader log="log" />
                        </div>
                        <div className="comp">
                            <h3>Login</h3>
                            <h5>Hello again!</h5>
                        </div>
                        <Login />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default JoinLogin;
