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
                {isLoggedIn ? (  //Creates ternary condition to show different navbars based on login status
                    // When user is logged in
                    <>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/savings">Saving</Link></li>
                        <li><Link to="/credit">Credit</Link></li>
                        <li><Link to="/debt-and-loan">Debt & Loan</Link></li>
                        <li><Link to="/budgeting">Budgeting</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link onClick={handleLogout}>Logout</Link></li>
                    </>
                ) : (
                    // When user is not logged in
                    <>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/savings">Saving</Link></li>
                        <li><Link to="/credit">Credit</Link></li>
                        <li><Link to="/debt-and-loan">Debt & Loan</Link></li>
                        <li><Link to="/budgeting">Budgeting</Link></li>
                        <li><Link to="/Login">Login/Signup</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;