import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './Pages.css';
import { useAuth } from "../components/AuthContext";

function Profile() {
    const { isLoggedIn, user } = useAuth();  // assuming you store user email here
    
    const userName = user.name;

    return (
        <>
            {isLoggedIn ? (
                <div className=" alt-background ">
                    <div className="d-flex justify-content-center align-items-center vh-100 ">
                        <div className="site-shape">

                            <h2 className=" d-flex justify-content-center">Profile Page</h2>
                            <h4 className=" d-flex justify-content-center ">Welcome, {userName}!</h4>
                            <p className="d-flex justify-content-center">
                                Manage your personal information and budgets by clicking on the buttons below.
                            </p>

                            <div className="container w-50">
                                <Link to="/change-password" className=" d-flex justify-content-center ">Change Password</Link>
                            </div>

                            <div className="d-flex justify-content-center mt-4">
                                <Link to="/budgets" className="btn btn-custom w-25 rounded-3 m-2">
                                    View Your Budgets
                                </Link>
                                <Link to="/create-budget" className="btn btn-custom w-25 rounded-3 m-2">
                                    Create New Budget
                                </Link>
                                <Link to="/" className="btn btn-custom w-25 rounded-3 m-2">
                                    Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
                    <div className="bg-white p-3 rounded w-25">
                        <h2 style={{ textAlign: "center" }}>Please Log In To View Page</h2>
                        <Link to="/login" className="btn btn-custom w-100 rounded-3 mt-2">Login</Link>
                    </div>
                </div>
            )}
        </>
    );
}

export default Profile;
