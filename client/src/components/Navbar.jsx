import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from "./AuthContext";

function Navbar() {

    const navigate = useNavigate();
    const { isLoggedIn, setIsLoggedIn } = useAuth();


    const handleLogout = () => {
        localStorage.removeItem("loggedInUser");
        setIsLoggedIn(false);
        navigate("/");
    }

    return (
        <nav className="navbar">
            <ul>
                {isLoggedIn ? (
                    // When user is logged in
                    <>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/budgets">Budgets</Link></li>
                        <li><button onClick={handleLogout}>Logout</button></li>
                    </>
                ) : (
                    // When user is NOT logged in
                    <>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/Login">Login/Signup</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;