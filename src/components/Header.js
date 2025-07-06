import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
                </ul>
            </nav>
        </header>
    );
};

export default Header;