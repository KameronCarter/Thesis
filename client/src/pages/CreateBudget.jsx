// Profile Page
/* Ideas
- Add dropdown to select budget category instead of having users type it in
- Maybe allow users to interact with spending money to update how much they have left
- Add a section to show how much was already spent
*/

//import React from 'react';
//Since this is using a form just like Login and Signup pages, styling will be made with bootstrap
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './Pages.css';
import { useAuth } from "../components/AuthContext";

//Dr. Sahu Github: pratapsahu1980

function CreateBudget() {
    const [totalAmount, setTotalAmount] = useState("");
    const [expenses, setExpenses] = useState("");

    const [totalDebt, setTotalDebt] = useState("");
    const [monthlyPayment, setMonthlyPayment] = useState("");
    const [interestRate, setInterestRate] = useState("");

    const [category, setCategory] = useState("");
    const [error, setError] = useState("");
    const categories = ["Traditional", "50/30/20", "Debt Repayment", "Coming Soon: Credit Card Management"];
    const navigate = useNavigate();
    const { isLoggedIn, setIsLoggedIn, user, } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        const normalizedCategory = category.toLowerCase();
        console.log("Normalized Category:", normalizedCategory); // Debugging log

        const payload = { // This payload is what is sent to the backend to create a new budget. 
            totalAmount: Number(totalAmount),
            category,
            normalizedCategory,
            email: user.email,
            expenses: expenses ? Number(expenses) : null,
            totalDebt: totalDebt ? Number(totalDebt) : null,
            monthlyPayment: monthlyPayment ? Number(monthlyPayment) : null,
            interestRate: interestRate ? Number(interestRate) : null,
            monthsNeeded: Number(localStorage.getItem("monthsNeeded")) || null,
            spendingMoney: Number(localStorage.getItem("spendingMoney")) || null,
            savingsMoney: Number(localStorage.getItem("savingsMoney")) || null
        };

        switch (normalizedCategory) {
            case "Traditional":
                const spendingMoneyTraditional = totalAmount - expenses;
                localStorage.setItem("spendingMoney", spendingMoneyTraditional);
                break;

            case "50/30/20":
                const forNeeds = totalAmount * 0.5;
                const spendingMoney503020 = totalAmount * 0.3;
                const savingsMoney503020 = totalAmount * 0.2;
                localStorage.setItem("forNeeds", forNeeds);
                localStorage.setItem("spendingMoney", spendingMoney503020);
                localStorage.setItem("savingsMoney", savingsMoney503020);
                break;

            case "Debt Repayment":
                const debt = parseFloat(totalDebt);
                const payment = parseFloat(monthlyPayment);
                const annualRate = parseFloat(interestRate);

                const monthlyRate = annualRate / 100 / 12;

                // Check if payment is enough to cover interest
                if (payment <= monthlyRate * debt) {
                    setError("Monthly payment is too low. Debt will never be paid off.");
                    return;
                }

                const monthsNeeded = Math.ceil(
                    -Math.log(1 - (monthlyRate * debt) / payment) /
                    Math.log(1 + monthlyRate)
                );

                localStorage.setItem("monthsNeeded", monthsNeeded);
                break;

            default:
                console.warn("Unknown category:", category);
        }


        axios.post('http://localhost:3001/create-budget', payload)
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
                <div className="alt-background">
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
                                    <select
                                        name="category"
                                        className="form-control rounded-0"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <option value="">Select Budget Category</option>
                                        {categories.map((item) => (
                                            <option key={item} value={item}>
                                                {item}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {(category !== "Coming Soon: Credit Card Management") && (
                                    <>
                                        <div className="mb-3">
                                            <label htmlFor="income">
                                                <strong>Monthly Income</strong>
                                            </label>
                                            <input
                                                type="number"
                                                placeholder="Enter Monthly Income"
                                                autoComplete="off"
                                                name="amount"
                                                className="form-control rounded-0"
                                                onChange={(e) => setTotalAmount(e.target.value)}  //Assigns value in input field to setTotalAmount variable
                                            />
                                        </div>



                                        {category !== "Debt Repayment" && ( //Only show expenses input if not Debt Repayment category since that category uses a different calculation method
                                            <div className="mb-3">
                                                <label htmlFor="expenses">
                                                    <strong>Monthly Expenses</strong>
                                                </label>
                                                <input
                                                    type="number"
                                                    placeholder="Enter Monthly Expenses"
                                                    autoComplete="off"
                                                    name="expenses"
                                                    className="form-control rounded-0"
                                                    onChange={(e) => setExpenses(e.target.value)}
                                                />
                                            </div>
                                        )}
                                    </>
                                )}
                                {category === "Debt Repayment" && (
                                    <>
                                        <div className="mb-3">
                                            <label>
                                                <strong>Total Debt</strong>
                                            </label>
                                            <input
                                                type="number"
                                                placeholder="Enter Total Debt"
                                                className="form-control rounded-0"
                                                onChange={(e) => setTotalDebt(e.target.value)}
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label>
                                                <strong>Monthly Debt Payment</strong>
                                            </label>
                                            <input
                                                type="number"
                                                placeholder="Enter Monthly Payment"
                                                className="form-control rounded-0"
                                                onChange={(e) => setMonthlyPayment(e.target.value)}
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label>
                                                <strong>Interest Rate (Annual %)</strong>
                                            </label>
                                            <input
                                                type="number"
                                                placeholder="Enter Annual Interest Rate"
                                                className="form-control rounded-0"
                                                onChange={(e) => setInterestRate(e.target.value)}
                                            />
                                        </div>
                                    </>
                                )}

                                {category === "Coming Soon: Credit Card Management" && ( //Only show expenses input if not Debt Repayment category since that category uses a different calculation method
                                    <div className="mb-3">
                                        <img src="https://th.bing.com/th/id/OIP._8B9Mu2Hi9MGreFJA7Ql9QHaHa?w=181&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="Coming Soon" style={{ width: "100%", height: "auto" }} />
                                    </div>
                                )}


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