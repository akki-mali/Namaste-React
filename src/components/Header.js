import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from 'react';
import {Link} from 'react-router';
import useOnlineStatus  from "../utils/useOnlineStatus";

const Header = () => {
    const [btnText, setBtnText] = useState("Login");

    useEffect(() => {
        console.log("Header component mounted");
    },[])

    const onlineStatus = useOnlineStatus();

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
                    <li className="p-4"><Link to="/contact">Contact</Link></li>
                    <li className="p-4"><Link to="#">Cart</Link></li>
                    <li className="p-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="p-4">
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