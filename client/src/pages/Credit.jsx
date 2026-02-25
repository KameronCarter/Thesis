import React from 'react';
import Navbar from '../components/Navbar.jsx';
import './Pages.css';

function Credit() {
    return (
        <>
            <div className="site-background">
                <div className="d-flex justify-content-center align-items-center ">
                    <div className="site-shape">
                        <header className="header">
                            <h1>FinanceMadeSimple</h1>
                        </header>

                        <div>
                            <Navbar />
                        </div>

                        <div className="main-container">
                            <section className="content">
                                <div className="card">
                                    <h4>Introduction to Credit</h4>

                                    <p className="left-section">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                                    </p>
                                </div>

                                <hr />

                                <div className="card">
                                    <h4 className="right-section">More Overview</h4>

                                    <p className="right-section">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                                    </p>
                                </div>

                                <hr />

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

export default Credit;
