import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../components/AuthContext";
import './Budgets.css';
import "./home.css";

function Budgets() {
    const { user } = useAuth(); // should give { email, _id }
    const [budgets, setBudgets] = useState([]);

    useEffect(() => {
        if (!user?._id) {
            console.log(user);
            console.log("User ID not available");
            return;
        }

        axios.get(`http://localhost:3001/budgets/${user._id}`) //Calling the get route from my backend (in budgets.js))
            .then(res => {
                console.log("Budgets from backend:", res.data);
                setBudgets(res.data);
            })
            .catch(err => console.log(err));
    }, [user]);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/budgets/delete/${id}`)  //Calling the delete route from my backend (in budgets.js))
            .then(() => {
                setBudgets(prev => prev.filter(b => b._id !== id));  //This updates the budget map to remove the deleted budget from the UI
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            <div className="site-background">
                <div className="site-shape">
                    <div className="budgets-container">
                        <h1>Current Budgets</h1>

                        {budgets.length === 0 ? (
                            <p>No budgets found.</p>
                        ) : (
                            <div className="budgets-grid">
                                {budgets.map(b => (
                                    <div className="budget-card" key={b._id}>
                                        {(() => {  //This Immediately Invoked Function Expression (IIFE) helps me to use switch case inside JSX because normal switch case cannot be used directly inside JSX
                                            const category = b.category.toLowerCase();
                                            switch (category) {
                                                case "traditional":
                                                    return (
                                                        <>
                                                            <h3>{b.category}</h3>
                                                            <p><strong>Monthly Income:</strong> ${b.totalAmount}</p>
                                                            <p><strong>Monthly Expenses:</strong> ${b.expenses}</p>
                                                            <p><strong>Spending Money:</strong> ${b.spendingMoney}</p>
                                                            <button className="btn btn-custom w-100 rounded-3" onClick={() => handleDelete(b._id)}>
                                                                Delete
                                                            </button>
                                                        </>
                                                    );

                                                case "50/30/20":
                                                case "50-30-20":
                                                case "fifty/thirty/twenty":
                                                case "50/20/30":
                                                    return (
                                                        <>
                                                            <h3>{b.category}</h3>
                                                            <p><strong>Monthly Income:</strong> ${b.totalAmount}</p>
                                                            <p><strong>Monthly Expenses:</strong> ${b.expenses}</p>
                                                            <p><strong>Spending Money:</strong> ${b.spendingMoney}</p>
                                                            <p><strong>Savings Money:</strong> ${b.savingsMoney}</p>
                                                            <button className="btn btn-custom w-100 rounded-3" onClick={() => handleDelete(b._id)}>
                                                                Delete
                                                            </button>
                                                        </>
                                                    );

                                                default:
                                                    return (
                                                        <>
                                                            <h3>{b.category}</h3>
                                                            <p><strong>Monthly Income:</strong> ${b.totalAmount}</p>
                                                            <p><strong>Monthly Expenses:</strong> ${b.expenses}</p>
                                                            <p><strong>Spending Money:</strong> ${b.spendingMoney}</p>
                                                            <p><strong>Savings Money:</strong> ${b.savingsMoney}</p>
                                                            <p><strong>Debt Repayment: Undefined as of now</strong></p>
                                                            <button className="btn btn-custom w-100 rounded-3" onClick={() => handleDelete(b._id)}>
                                                                Delete
                                                            </button>
                                                        </>
                                                    );
                                            }
                                        })()}
                                    </div>

                                ))}
                            </div>
                        )}
                    </div>
                    <div className="d-flex justify-content-center"> {/* Allows me to make the home button centered regardless of its width */}
                        <Link to="/" className="btn btn-custom w-25 rounded-3">
                            Home
                        </Link>
                        <Link to="/create-budget" className="btn btn-custom w-25 rounded-3 mx-2">
                            Create New Budget
                        </Link>
                        <Link to="/profile" className="btn btn-custom w-25 rounded-3 mx-2">
                            Profile
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Budgets;
