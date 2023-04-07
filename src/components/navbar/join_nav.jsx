import React from 'react';
import Logo from '../navbar/image/Kitab Blogu.png';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './join_nav.scss';
function JoinNav({ sign }) {
    return (
        <div>
            <nav>
                <Link className="site-logo" to="/">
                    <img src={Logo} alt="" style={{ width: "120px", height: "40px" }} />
                </Link>
                <div className="rigth">
                    <Link className="close" to="/">
                        <AiOutlineClose />
                    </Link>
                    {
                        sign
                            ?
                            <div className="comp-right">
                                Have an account? <Link className="log-sign" to="/login">Daxil ol</Link>
                            </div>
                            :
                            <div className="comp-right">
                                Not have an account? <Link className="log-sign" to="/sign">Qeydiyyat</Link>
                            </div>
                    }

                </div>
            </nav>
        </div>
    )
}

export default JoinNav;
