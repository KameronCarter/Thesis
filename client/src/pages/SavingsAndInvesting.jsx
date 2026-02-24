import React from 'react';
import Navbar from '../components/Navbar.jsx';
import SavingOnClick from './SavingsOnClick.jsx';
import InvestingOnClick from './InvestingOnClick.jsx';
import './Pages.css';
import { useState } from 'react';

function SavingsAndInvesting() {
    const [selected, setSelected] = useState(null);

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
                        {!selected ? ( // Start of the Saving section, which is shown automatically or when the user clicks on the "Back to Saving" button
                            <>
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

                                        <div>
                                            <SavingOnClick />
                                        </div>
                                        <button className="btn btn-custom w-100 rounded-3" onClick={() => setSelected(true)}>
                                            Learn About Investing
                                        </button>

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
                            </>
                        ) : ( // Start of the Investing section, which is shown when the user clicks on the "Learn About Investing" button
                            <>
                                <div className="main-container">
                                    <section className="content">
                                        <div className="card">
                                            <h4>Overview of Investing</h4>

                                            <p className="left-section">
                                                When many people hear the word investing, they think of the stock market, but investing is much more than that.
                                                You can invest in things like real estate, mutual funds, and even a small business.
                                                Investing entails putting your <strong>money in assets with the aim that it grows(appreciates) over time or generates income.</strong>
                                                It is a always a long term strategy that can help you build wealth and achieve financial goals,
                                                but that does not mean there aren't risks. <strong>You must understand the risks involved in investing and to diversify
                                                    your investments</strong> to minimize risk. <strong>Compound returns is one of the main benefits of investing </strong>, which is when
                                                the returns you earn on your investments are reinvested to generate even more returns. This can lead to exponential growth over
                                                time, making it a powerful tool for building wealth and just like saving, the <strong>best investing method depends on your personal goals.</strong>
                                            </p>
                                        </div>

                                        <hr />

                                        <div className="card">
                                            <h4 className="right-section">Before Choosing a Investing Method</h4>

                                            <p className="right-section">
                                                When you want to start investing, there is one thing that you need to have first, that being a brokerage account.
                                                A <strong>brokerage account is an investment account that allows you to buy and sell investments</strong> like stocks, bonds, real estate, and mutual funds.
                                                Next you need to <strong>determine your investment goals and risk tolerance</strong>, which will help you decide which investments are best for you.
                                                For example, if you have a low risk tolerance, you may want to invest in bonds or mutual funds, but if you have a high risk tolerance, you 
                                                may want to invest in stocks or real estate. Another important part of starting to invest is to <strong>understand how much time you have to invest</strong>,
                                                whether that be until a specific purchase or until retirement. These 3 steps are crucial to starting your investing journey. To learn more about how to start investing, visit
                                                {" "}<a href='https://www.ameriprise.com/financial-goals-priorities/investing' target="_blank" rel="noopener noreferrer">here</a>. This resource provides what to consider before, during,
                                                and after investing.
                                            </p>
                                        </div>

                                        <div>
                                            <InvestingOnClick />
                                        </div>

                                        <button className="btn btn-custom w-100 rounded-3 mb-3" onClick={() => setSelected(false)}>
                                            Back to Saving
                                        </button>

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
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SavingsAndInvesting;
