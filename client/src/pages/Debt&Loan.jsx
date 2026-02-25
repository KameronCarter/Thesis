import React from 'react';
import Navbar from '../components/Navbar.jsx';
import './Pages.css';
import { useState } from 'react';
import DebtOnClick from './DebtOnClick.jsx';
import LoanOnClick from './LoanOnClick.jsx';

function DebtAndLoan() {
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
                                            <h4>Overview of Debt</h4>

                                            <p className="left-section">
                                                <strong>Debt, in simple terms, is money that you owe to someone else.</strong> It can come in <strong>many forms</strong>, such as credit card debt, student loans, mortgages, and personal loans.
                                                <strong>It can be either secured or unsecured</strong>, with secured debt being backed by collateral and unsecured debt not being backed by collateral. 
                                                <strong>Debt can be a useful tool for financing large purchases or investments</strong>, like cars and homes, but it can also be a burden if not managed properly.
                                                The terms of your debt, such as the interest rate and repayment schedule, can have a significant impact on your financial health. 
                                                That is why <strong>it is important to understand the basics of debt and how to manage it effectively.</strong> To understand debt more in depth, visit
                                                {" "}<a href='https://www.investopedia.com/terms/d/debt.asp#toc-pros-and-cons-of-debt' target="_blank" rel="noopener noreferrer">here</a>.
                                            </p>
                                        </div>

                                        <hr />

                                        <div className="card">
                                            <h4 className="right-section">Repaying Debt</h4>

                                            <p className="right-section">
                                                Repayment of debt starts with <strong>determining how much you owe and to whom</strong>. Then, you need to <strong>create a repayment plan</strong> that works for your financial situation.
                                                The plan can include strategies like the snowball method, where you pay off your smallest debts first, or the avalanche method, where you pay off your highest interest rate debts first.
                                                <strong>Personalization of this plan is the key to successfully executing it</strong>. Another thing to <strong>consider</strong> is <strong>the type of debt that you have</strong>, as 
                                                some types of debt may work differently and require different strategies. To research some common types of debt, visit 
                                                {" "}<a href='https://www.investopedia.com/terms/d/debt.asp#toc-types-of-debt' target="_blank" rel="noopener noreferrer">this site</a>.
                                            </p>
                                        </div>

                                        <div>
                                            <DebtOnClick />
                                        </div>
                                        <button className="btn btn-custom w-100 rounded-3" onClick={() => setSelected(true)}>
                                            Learn About Loan
                                        </button>

                                        <hr />


                                    </section>

                                    <aside className="sidebar">
                                        <h5>Key Takeaways</h5>
                                        <ul>
                                            <li>Debt is when you owe someone</li>
                                            <li>Can come in many forms, secured or unsecured</li>
                                            <li>It is a tool, that if used correctly can help build credit and achieve financial goals</li>
                                            <li>To repay debt, determine what you owe, who you owe it to, and what type of debt it is</li>
                                            <li>Create a repayment plan based on personal financial situation and goals</li>
                                        </ul>
                                    </aside>
                                </div>
                            </>
                        ) : ( // Start of the Investing section, which is shown when the user clicks on the "Learn About Investing" button
                            <>
                                <div className="main-container">
                                    <section className="content">
                                        <div className="card">
                                            <h4>Overview of Loans</h4>

                                            <p className="left-section">
                                                Now, let's discuss loans. A <strong>loan is a sum of money that it borrowed and is expected to be paid back with interest.</strong>
                                                The types and reasons for taking out a loan can vary greatly, from buying a home, to paying for education, or even something
                                                as personal as a vacation. When used correctly<strong>loans can be a powerful tool for achieving financial goals</strong>.
                                                However, many people find themselves not understanding how to manage loans effectively, which can cause financial stress.
                                                Loans contain <strong>two main parts, the principal, which is the amount of money originally borrowed, and the interest, 
                                                which is the cost charged by the lender for borrowing the money.</strong> It is imperative to understand how these components 
                                                work in your specific loan type and, like the other financial topics, it is important to choose a loan that best benefits your 
                                                personal financial situation and goals. For more information on loans, visit
                                                {" "}<a href='https://backtodefault.com/what-is-a-loan/' target="_blank" rel="noopener noreferrer">here</a>.
                                            </p>
                                        </div>

                                        <hr />

                                        <div className="card">
                                            <h4 className="right-section">Choosing a Loan</h4>

                                            <p className="right-section">
                                                As mentioned before, there are many different types of loans, and not all loans are created equal. If you determine that a loan
                                                is the right decision, it is important to <strong>research the type of loan you are considering and understant the terms and conditions</strong> of the loan. 
                                                Some loans may have fixed interest rates, while others may have variable(changing) interest rates or one loan may have a longer repayment period 
                                                than another. Extra fees, such as early repayment fees, can also determine if a loan is right for you. These <strong>loan factors need to be understood
                                                before applying for a loan</strong> to ensure that you are making the best decision for your financial situation and goals. To understand how to choose
                                                a loan that is right for you, visit
                                                {" "}<a href='https://www.consumerfinance.gov/owning-a-home/explore/understand-the-different-kinds-of-loans-available/' target="_blank" rel="noopener noreferrer">this site</a>.
                                                This resource provides a comparitive breakdown of what to look for in a loan and some steps to take when applying for a loan. (This sight is focused more on home
                                                loans, but the information can be applied to other types of loans as well)
                                            </p>
                                        </div>

                                        <div>
                                            <LoanOnClick />
                                        </div>

                                        <button className="btn btn-custom w-100 rounded-3 mb-3" onClick={() => setSelected(false)}>
                                            Back to Debt
                                        </button>

                                        <hr />


                                    </section>

                                    <aside className="sidebar">
                                        <h5>Key Takeaways</h5>
                                        <ul>
                                            <li>Loans are a sum of money borrowed from a lender and expected to be paid back with interest.</li>
                                            <li>They could be used as a powerful financial tool if used responsibly, for example, to purchase a house</li>
                                            <li>Two main things to consider: the principal (original amount) and the interest rate (which is the cost charged by the lender for borrowing the money).</li>
                                            <li>Research the type of loan that is right for you and understand all the terms and conditions before applying.</li>
                                            <li>It is important to ensure that you can afford the monthly payments and that the loan is not more expensive than necessary.</li>
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

export default DebtAndLoan;
