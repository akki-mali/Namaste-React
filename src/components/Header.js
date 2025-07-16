import { LOGO_URL } from "../utils/constants";
import React, { useEffect, useState } from 'react';

const Header = () => {
    const [btnText, setBtnText] = useState("Login");

    useEffect(() => {
        console.log("Header component mounted");
    },[])
    return (
        <header>
            <div className='logo-container'>
                <img className="logo" src={LOGO_URL} alt="Logo"/>
            </div>
            <nav className='nav-items'>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#">Cart</a></li>
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