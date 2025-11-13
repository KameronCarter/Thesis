// Profile Page
/* Ideas
Create two buttons: one for viewing profile details(changing password, email, etc.), another for viewing user's budgets.

The button for viewing budgets should also contain a button for creating a new budget 
that button should replace the div by using document.getElementById to a form to add to budget fields.

This should be connected to the user and budgetSchema to hold all information

Other optional notes is to add a way to delete a profile in the client side.
*/

//import React from 'react';
//import './Profile.css';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './Home.css';
import { useAuth } from "../components/AuthContext";

//Dr. Sahu Github: pratapsahu1980

function Profile() {
    const [totalAmount, setTotalAmount] = useState("");
    const [category, setCategory] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { isLoggedIn, setIsLoggedIn, user, } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/profile', { totalAmount, category, email: user.email, })
            .then(result => {
                console.log(result);
                if (result.data === "Budget Created Successfully") {
                    navigate("/");
                }

            })
            .catch(err => {
                if (err.response && err.response.data && err.response.data.error) {
                    console.error(err);
                    setError(err.response.data.error); //show backend error
                } else {
                    setError("An unexpected error occurred.");
                }
            })
    }

    return (
        <>
            {isLoggedIn ? (
                <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
                    <div className="bg-white p-3 rounded w-25">
                        <h2 style={{ textAlign: "center" }}>Create Budget</h2>

                        {error && (
                            <div className="alert alert-danger text-center py-1">
                                {error}
                            </div>
                        )}


                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="category">
                                    <strong>Type of Budget</strong>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Budget Category"
                                    autoComplete="off"
                                    name="category"
                                    className="form-control rounded-0"
                                    onChange={(e) => setCategory(e.target.value)}  //Assigns value in input field to setCategory variable
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="amount">
                                    <strong>Total Amount of Money Available</strong>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Total Amount"
                                    autoComplete="off"
                                    name="amount"
                                    className="form-control rounded-0"
                                    onChange={(e) => setTotalAmount(e.target.value)}  //Assigns value in input field to setTotalAmount variable
                                />
                            </div>
                            <button type="submit" className="btn btn-custom w-100 rounded-3">
                                Create Budget
                            </button>
                        </form>
                        <Link to="/" className="btn btn-custom w-100 rounded-3 mt-2">Home</Link>
                    </div>
                </div>
            ) : (
                <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
                    <div className="bg-white p-3 rounded w-25">
                        <h2 style={{ textAlign: "center" }}>Please Log In</h2>
                        <Link to="/login" className="btn btn-custom w-100 rounded-3 mt-2">Login</Link>
                    </div>
                </div>
            )}
        </>
    );
}

export default Profile;