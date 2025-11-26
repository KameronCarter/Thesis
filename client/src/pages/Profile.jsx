// Profile Page
/* Ideas
Create two buttons: one for viewing profile details(changing password, email, etc.), another for viewing user's budgets.

The button for viewing budgets should also contain a button for creating a new budget 
that button should replace the div by using document.getElementById to a form to add to budget fields.

Other optional notes is to add a way to delete a profile in the client side.
*/
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './Home.css';
import { useAuth } from "../components/AuthContext";

//Dr. Sahu Github: pratapsahu1980

function Profile() {



    return (
        <>
            <div className="site-background">
                <div className="site-shape">

                    <h2 style={{ textAlign: "center" }}>Profile Page</h2>
                    <p style={{ textAlign: "center" }}>Welcome to your profile! Here you can view and manage your personal information and budgets.</p>


                    <div className="d-flex justify-content-center">
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
        </>
    );
}

export default Profile;