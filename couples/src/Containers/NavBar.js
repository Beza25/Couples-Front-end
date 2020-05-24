
import React from "react";
import {Link} from 'react-router-dom'

const NavBar =  (props )=> {
    return (
         <div >
            <div className={`ui inverted ${props.color} menu navbar`}>
                <Link to="/" className="item">
                    <h2 className="ui header">
                        <i className={`${props.icon} icon`}></i>
                        <div className="content" >Couple </div>
                        <div className="sub header"></div>
                    </h2>
                </Link>
                <div className="item">
                    <Link to="/">LogIn</Link>
                </div>
                <div className="item">
                    <Link to="/MainPage">MainPage</Link>
                </div>
                <div className="item">
                    <Link to="/profile">Profile</Link>
                </div>
               
            </div>

        </div>
);
}
export default NavBar
