import React from 'react';
import Navbar from '../components/Navbar.jsx';
import './Pages.css';

// Ideas
// Make the quizzes at the end of each page pop out at the user
// Add more engaging graphics and images to the pages
// Add something for auditory learners like videos or podcasts
//   For example an AI voice to speak on the aside key takeaways

function Budgeting() {
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
                                    <h4>Importance of Budgeting</h4>

                                    <p className="left-section">
                                        About 60% of Americans can't cover a $1,000 emergency expense with savings and 80% struggle with debt <sub>[1]</sub>. This highlights
                                        the need for effective budgeting skills to manage finances and build savings. Budgeting helps individuals track income and expenses so that
                                        they don't spend more than they earn. <strong> The correct budget can help reduce debt, increase savings, prepare for emergencies,
                                            and achieve financial goals.</strong>
                                    </p>
                                </div>
                                <hr />
                                <div className="card">
                                    <h4 className="right-section">How to Create a Budget</h4>

                                    <p className="right-section">
                                        To create a budget, start by <strong>gaining all financial statements</strong>, whether that be bank statements, bills, or pay stubs. Next,
                                        <strong>list all sources of income and all monthly expenses</strong>, including fixed and variable costs (meaning costs that stay the same each month and
                                        cost that can change). <strong>Then calculate the difference between all incomes and expenses to determine what money is left over or needed</strong>. Once the results are gathered, determine
                                        your next course of action, for example, if your expenses are higher than your income, look for areas to cut back or if you have money left over, consider allocating
                                        it towards savings or debt repayment. The key to successful budgeting is to <strong>regularly review and adjust your budget as needed</strong> to stay on track with your financial goals.
                                    </p>
                                </div>

                                <hr />

                                <div className="card">
                                    <h4>Types of Budgets</h4>

                                    <p className="left-section">
                                        There are several types of budgets that individuals can used based on their financial situation, goals and preferences.
                                        Some common types include the <strong>traditional budget,  the 50/30/20 budget, the zero-based-budget, and the envelope system</strong>. The <strong>traditional budget
                                        involves tracking income and expense only</strong> to prevent overspending. The <strong>50/30/20 budget, however, divides income into three categories: 50% for needs,
                                        30% for wants, and 20% for savings and debt repayment</strong>. The zero-based-budget entails making sure expenses subtracted from income equal zero at
                                        the end of the month. The envelope system is a cash system that has you make an envelope for each category you create and stop spending once the
                                        envelope is empty.
                                    </p>
                                </div>

                                <hr />


                                <div className="card">
                                    <h4 className="right-section">Tips for Successful Budgeting</h4>

                                    <p className="right-section">
                                        <strong>Don't confuse necessities and luxuries</strong>, for example, a $10 meal vs a $50 meal. <strong>Make note of the small spending</strong> done throughout the month, those
                                        small drinks can add up quick! <strong>Try to use cash</strong> because even though credit and debit cards are convient, they are easier to overuse because you can't
                                        see the money. However if you prefer <strong>to use cards, set spending limits and monitor your spending regularly</strong>. Last but not least, <strong>manage your 
                                        debt</strong> by paying off loans or credit cards and seek help if it becomes too much (<strong>it is okay to ask for help!</strong>).
                                    </p>
                                </div>
                                <hr />

                                <footer className="footer">
                                    <h6>Learn more about budgeting below</h6>
                                    <p>
                                        <ul>
                                            <li><a href="https://www.incharge.org/financial-literacy/budgeting-saving/how-to-make-a-budget/">InCharge - Budgeting</a> <sub>[1]</sub></li>

                                        </ul>
                                    </p>
                                </footer>


                            </section>

                            <aside className="sidebar">
                                <h5>Quick Learning</h5>
                                <ul>
                                    <li>Budgeting is important to ensure no overspending and preparation to emergencies</li>
                                    <li>Create a budget by gaining and adding incomes and expenses then use a budget type with said information</li>
                                    <li>Different types of budgets based on goals, financial situation, and preferences</li>
                                    <li>Don't confuse needs and wants</li>
                                    <li>Manage debts and ask for help when needed</li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Budgeting;
