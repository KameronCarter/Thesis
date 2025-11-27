import React from 'react';
import Navbar from '../components/Navbar.jsx';
import './Home.css';

function Home() {
    return (
        <>
            <div className="site-background">
                <div className="d-flex justify-content-center align-items-center vh-100 ">
                    <div className="site-shape">
                        <header className="header">
                            <h1>Overview of Financial Literacy</h1>
                        </header>

                        <div>
                            <Navbar />
                        </div>

                        <div className="main-container">
                            <section className="content">

                                <h4>Introduction to Financial Literacy</h4>
                                <p className="left-section">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                                </p>
                                <h4 className="right-section">More Overview</h4>
                                <p className="right-section">
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
