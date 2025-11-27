// Profile Page
/* Ideas
Create two buttons: one for viewing profile details(changing password, email, etc.), another for viewing user's budgets.

The button for viewing budgets should also contain a button for creating a new budget 
that button should replace the div by using document.getElementById to a form to add to budget fields.

Other optional notes is to add a way to delete a profile in the client side.
*/

//import React from 'react';
//Since this is using a form just like Login and Signup pages, styling will be made with bootstrap
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './Home.css';
import { useAuth } from "../components/AuthContext";

//Dr. Sahu Github: pratapsahu1980

function CreateBudget() {
    const [totalAmount, setTotalAmount] = useState("");
    const [expenses, setExpenses] = useState("");
    const [category, setCategory] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { isLoggedIn, setIsLoggedIn, user, } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        const normalizedCategory = category.toLowerCase();

        switch (normalizedCategory) {
            case "traditional":
                const spendingMoneyTraditional = totalAmount - expenses;
                localStorage.setItem("spendingMoney", spendingMoneyTraditional);
                break;

            case "50/30/20":
            case "fifty/thirty/twenty":
            case "50-30-20":
            case "50/20/30":
                const forNeeds = totalAmount * 0.5;
                const spendingMoney503020 = totalAmount * 0.3;
                const savingsMoney503020 = totalAmount * 0.2;
                localStorage.setItem("forNeeds", forNeeds);
                localStorage.setItem("spendingMoney", spendingMoney503020);
                localStorage.setItem("savingsMoney", savingsMoney503020);
                break;

            case "debt repayment":
                const spendingMoneyDebt = totalAmount * 0.2;
                const savingsMoneyDebt = totalAmount * 0.1;
                localStorage.setItem("spendingMoney", spendingMoneyDebt);
                localStorage.setItem("savingsMoney", savingsMoneyDebt);
                break;

            default:
                console.warn("Unknown category:", category);
        }


        axios.post('http://localhost:3001/create-budget', { totalAmount, category, email: user.email, expenses, spendingMoney: localStorage.getItem("spendingMoney"), savingsMoney: localStorage.getItem("savingsMoney"), forNeeds: localStorage.getItem("forNeeds") })
            .then(result => {
                console.log(result);
                if (result.data === "Budget Created Successfully") {
                    if (category === "traditional" || category === "Traditional") {
                        alert("Budget Created Successfully! You have $" + localStorage.getItem("spendingMoney") + " available for spending money each month.");
                    } else {
                        navigate("/");
                    }
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
                <div className="site-background">
                    <div className="d-flex justify-content-center align-items-center vh-100">
                        <div className="bg-white p-3 rounded w-25 shadow-lg">
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
                                    <label htmlFor="income">
                                        <strong>Monthly Income</strong>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Monthly Income"
                                        autoComplete="off"
                                        name="amount"
                                        className="form-control rounded-0"
                                        onChange={(e) => setTotalAmount(e.target.value)}  //Assigns value in input field to setTotalAmount variable
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="expenses">
                                        <strong>Monthly Expenses</strong>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Monthly Expenses"
                                        autoComplete="off"
                                        name="expenses"
                                        className="form-control rounded-0"
                                        onChange={(e) => setExpenses(e.target.value)}  //Assigns value in input field to setExpenses variable
                                    />
                                </div>
                                <button type="submit" className="btn btn-custom w-100 rounded-3">
                                    Create Budget
                                </button>
                            </form>
                            <Link to="/profile" className="btn btn-custom w-100 rounded-3 mt-2">
                                Back to Profile
                            </Link>
                            <Link to="/" className="btn btn-custom w-100 rounded-3 mt-2">
                                Home
                            </Link>
                        </div>
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

export default CreateBudget;