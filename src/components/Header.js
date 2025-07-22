import { LOGO_URL } from "../utils/constants";
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router';
import useOnlineStatus  from "../utils/useOnlineStatus";

const Header = () => {
    const [btnText, setBtnText] = useState("Login");

    useEffect(() => {
        console.log("Header component mounted");
    },[])

    const onlineStatus = useOnlineStatus();

    return (
        <header>
            <div className='logo-container'>
                <img className="logo" src={LOGO_URL} alt="Logo"/>
            </div>
            <nav className='nav-items'>
                <ul>
                    <li>Online Status : {onlineStatus ? 'green': 'red'}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="#">Cart</Link></li>
                    <li>
                        <button onClick={()=> {
                        btnText === 'Login' ? setBtnText("Logout") : setBtnText("Login");
                        console.log("Login button clicked");
                    }}>{btnText}</button></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;