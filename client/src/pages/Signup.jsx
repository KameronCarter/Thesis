import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Home.css';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); //State to hold error message
    const navigate = useNavigate();

    const handleSubmit = (e) => {   //Handles form submission using an event object passed as a parameter (e in this case)
        e.preventDefault();
        setError(""); //Clears errors to allow me to post that the email is already in use to the user instead of in the console

        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result);
                navigate("/login");
            })
            .catch(err => {
                if (err.response && err.response.data && err.response.data.error) {
                    setError(err.response.data.error); //show backend error
                } else {
                    setError("An unexpected error occurred.");
                }
            })
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2 style={{ textAlign: "center" }}>Register</h2>

                {/* This will display the error to the user if the email is already in use */}

                {error && (
                    <div className="alert alert-danger text-center py-1">
                        {error}
                    </div>
                )}
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            className="form-control rounded-0"
                            onChange={(e) => setName(e.target.value)}  //Assigns value in input field to setName variable
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}  //Assigns value in input field to setEmail variable
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            autoComplete="off"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}  //Assigns value in input field to setPassword variable
                        />
                    </div>
                    <button type="submit" className="btn btn-custom w-100 rounded-3">
                        Register
                    </button>
                </form>
                <p style={{ textAlign: "center" }}>Already have an account?</p>
                <Link to="/login" className="btn btn-custom w-100 rounded-3">
                    Login
                </Link>

            </div>
        </div>
    )
}

export default Signup;