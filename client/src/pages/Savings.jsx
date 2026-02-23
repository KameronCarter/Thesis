import React from 'react';
import Navbar from '../components/Navbar.jsx';
import './Pages.css';

function Savings() {
    return (
        <>
            <div className="site-background">
                <div className="d-flex justify-content-center align-items-center vh-100 ">
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
                                    <h4>Overview of Savings</h4>

                                    <p className="left-section">
                                        Before we dive into the importance of saving and how to save effectively, let's deepen our understanding of what saving is. 
                                        <strong>Saving is taking a portion of your income and putting it aside instead of spending it.</strong> That money is for future use, 
                                        whether that be for emergencies, big purchases, or retirement. <strong>Saving money is crucial for financial stability and achieving long-term 
                                        financial goals</strong> beacuse it provides a safety net in case of unexpected expenses and allows you to handle any financial choices that may arise in the future. 
                                        There are several ways to save, however, their effectiveness depends on individual circumstances and goals. <strong>Some saving methods 
                                        may work better for some people than others, so it's important to find the one that works best for you.</strong>
                                    </p>
                                </div>
                                
                                <hr />

                                <div className="card">
                                    <h4 className="right-section">Before Choosing a Saving Method</h4>

                                    <p className="right-section">
                                        As discussed, there are several saving methods, but there are general tips no matter what method you choose. One of the main tips is that <strong>an emergency
                                        fund is a must have in any saving strategy</strong> and it should ideally cover 3-6 months of living expenses. Another tips is to find a way
                                        to <strong>automate your saving method</strong> because doing so can help you stay consistent and build good saving habits. The most important tip
                                        is to <strong>save with a purpose</strong>, whether that be for a specific purchase or for retirement, having a clear goal can assist with motivation and consistency.
                                        Now, before choosing a saving method, it's important to <strong>consider your financial goals, risk tolerance, and how much time you need to save.</strong>
                                        Each of these factors can determine which saving method is best for you.

                                    </p>
                                </div>

                                <div className="card">
                                    <h4 className="right-section">Saving Methods</h4>

                                    <p className="right-section">
                                        Below are some commonly used saving methods. Hover over each method to learn more about it and its pros and cons. 
                                        <strong>Remember, the best saving method is the one that aligns with your financial goals, risk tolerance, and time horizon.</strong>
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

export default Savings;
