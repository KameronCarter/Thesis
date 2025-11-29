import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './Pages.css';
import { useAuth } from "../components/AuthContext";

function ChangePassword() {
    const { user } = useAuth();
    const [email, setEmail] = useState(user?.email || "");  // Pre-fill email if user is logged in for user convenience
    const [securityWord, setSecurityWord] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const { setIsLoggedIn } = useAuth();


    const handleLogout = () => {
        localStorage.removeItem("loggedInUser");
        setIsLoggedIn(false);
    }


    const handleChangePassword = () => {
        axios
            .put("http://localhost:3001/users/change-password", {
                email,
                securityWord,
                newPassword
            })
            .then((res) => {
                setMessage(res.data.message);
                setError(false);
                handleLogout();
                navigate("/login");
            })
            .catch((err) => {
                if (err.response) {
                    setMessage(err.response.data.error);
                    setError(true);
                } else {
                    setMessage("Something went wrong.");
                }
                setError(true);
            });
    };

    return (
        <>
            <div className="site-background">
                <div className=" d-flex justify-content-center align-items-center vh-100 "> {/* Boostrapping to allow background to extend and center the contents on the page */}
                    <div className="bg-white p-3 rounded w-50">

                        <h2 className=" d-flex justify-content-center mb-4">Change Password</h2>

                        <div className="container w-50 mt-4">

                            <input
                                type="email"
                                className="form-control my-2"
                                placeholder="Email"
                                value={email}
                                required="true"
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <input
                                type="text"
                                className="form-control my-2"
                                placeholder="Security Word"
                                value={securityWord}
                                required="true"
                                onChange={(e) => setSecurityWord(e.target.value)}
                            />

                            <input
                                type="password"
                                className="form-control my-2"
                                placeholder="New Password"
                                value={newPassword}
                                required="true"
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                            <div className="d-flex justify-content-center mt-4">
                                <button
                                    className="btn btn-custom w-50 rounded-3 m-2"
                                    onClick={handleChangePassword}
                                >
                                    Change Password
                                </button>
                            </div>

                            {message && (
                                <div className={`alert text-center py-1 ${error ? "alert-danger" : "alert-success"}`}>
                                    {message}
                                </div>
                            )}
                        </div>

                        <div className="d-flex justify-content-center mt-4">
                            <Link to="/profile" className="btn btn-custom w-50 rounded-3 m-2">
                                Profile
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default ChangePassword;
