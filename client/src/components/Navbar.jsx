import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <ul className='navbar-links'>
                    <li><Link to="/Login">Login/Signup</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;