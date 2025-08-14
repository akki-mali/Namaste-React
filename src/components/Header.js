import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from 'react';
import {Link} from 'react-router';
import useOnlineStatus  from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnText, setBtnText] = useState("Login");

    const {loggedInUser} = useContext(UserContext)

    useEffect(() => {
        console.log("Header component mounted");
    },[])

    const onlineStatus = useOnlineStatus();

    const cartItems = useSelector((store)=> store.cart.items)

    return (
        <header className="flex justify-between border">
            <div className='logo-container'>
                <img className="w-30" src={LOGO_URL} alt="Logo"/>
            </div>
            <nav className='flex items-center'>
                <ul className="flex">
                    <li className="p-4">Online Status : {onlineStatus ? 'green': 'red'}</li>
                    <li className="p-4"><Link to="/">Home</Link></li>
                    <li className="p-4"><Link to="/about">About</Link></li>
                    <li className="p-4"><Link to="/cart" className="font-bold">Cart-{cartItems.length}</Link></li>
                    <li className="p-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="p-4">
                        <button onClick={()=> {
                        btnText === 'Login' ? setBtnText("Logout") : setBtnText("Login");
                        console.log("Login button clicked");
                    }}>{btnText}</button></li>
                    <li className="p-2 font-bold">{loggedInUser}</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;