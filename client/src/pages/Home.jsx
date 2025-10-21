import React from 'react';
import Navbar from '../components/Navbar.jsx';
import './Home.css';


function navigateToSignup() {
    window.location.href = '/register';
}

function Home() {
    return (
        <>
            <header className="header">
                <h1>Overview of Financial Literacy</h1>
            </header>

            <div>
                <Navbar />
            </div>

            <div className="main-container">
                <section className="content">
                    <h4>Introduction to Financial Literacy</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                    </p>
                </section>

                <aside className="sidebar">
                    <h5>Key Takeaways</h5>
                    <ul>
                        <li>Understanding the basics of personal finance is crucial.</li>
                        <li>Budgeting helps in managing expenses effectively.</li>
                        <li>Saving and investing early can lead to financial security.</li>
                    </ul>
                </aside>
            </div>

        </>
    );
}

export default Home;
