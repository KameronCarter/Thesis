import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../components/AuthContext";
import './Budgets.css';

function Budgets() {
    const { user } = useAuth(); // should give { email, _id }
    const [budgets, setBudgets] = useState([]);

    useEffect(() => {
        if (!user?._id) {
            console.log(user);
            console.log("User ID not available");
            return;
        }

        axios.get(`http://localhost:3001/budgets/${user._id}`)
            .then(res => {
                console.log("Budgets from backend:", res.data);
                setBudgets(res.data);
            })
            .catch(err => console.log(err));
    }, [user]);

    return (
        <div className="budgets-container">
            <h1>Your Budgets</h1>

            {budgets.length === 0 ? (
                <p>No budgets found.</p>
            ) : (
                <div className="budgets-grid">
                    {budgets.map(b => (
                        <div className="budget-card" key={b._id}>
                            <h3>{b.category}</h3>
                            <p><strong>Monthly Income:</strong> ${b.totalAmount}</p>
                            <p><strong>Monthly Expenses:</strong> ${b.expenses}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Budgets;
