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

                                <h4>Importance of Budgeting</h4>

                                <p className="left-section">
                                    About 60% of Americans can't cover a $1,000 emergency expense with savings and 80% struggle with debt. This highlights 
                                    the need for effective budgeting skills to manage finances and build savings. Budgeting helps individuals track income and expenses so that 
                                    they don't spend more than they earn. <strong> The correct budget can help reduce debt, increase savings, prepare for emergencies, 
                                    and achieve financial goals.</strong>
                                </p>
                                <hr />

                                <h4 className="right-section">How to Create a Budget</h4>

                                <p className="right-section">
                                    To create a budget, start by <strong>gaining all financial statements</strong>, whether that be bank statements, bills, or pay stubs. Next, 
                                    <strong>list all sources of income and all monthly expenses</strong>, including fixed and variable costs (meaning costs that stay the same each month and 
                                    cost the can change). <strong>Add all incomes and expenses to determine what money is left over or needed</strong>. Once the results are gathered, determine
                                    your next course of action. If your expenses are higher than your income, look for areas to cut back. If you have money left over, consider allocating 
                                    it towards savings or debt repayment.
                                </p>
                                <hr />

                                <h4>Types of Budgets</h4>

                                <p className="left-section">
                                    There are several types of budgets that individuals can used based on their financial situation, goals and preferences.
                                    Some common types include the <strong>traditional budget,  the 50/30/20 budget, the zero-based-budget, and the envelope system</strong>. The traditional budget
                                    involves tracking income and expense only to prevent overspending. The 50/30/20 budget divides income into three categories: 50% for needs, 
                                    30% for wants, and 20% for savings and debt repayment. The zero-based-budget entails making sure expenses subtracted from income equal zero at 
                                    the end of the month. The envelope system is a cash system that has you make an envelope for each category you create and stop spending once the 
                                    envelope is empty.
                                    </p>

                                <h4 className="right-section">Tips for Successful Budgeting</h4>

                                <p className="right-section">
                                    Don't confuse necessities and luxuries, for example, a $10 meal vs a $50 meal. Make note of the small spending done throughout the month, those 
                                    small drinks can add up quick! Try an use cash because even though credit and debit cards are convient they are easier to overuse because you can't
                                    see the money. Last but not least, manage your debt by paying off loans or credit cards and seek help if it becomes too much (it is okay to ask for
                                    help!).
                                </p>
                                <hr />

                                <footer className="footer">
                                    <h6>Learn more about budgeting below</h6>
                                    <p>
                                        <ul>
                                            <li><a href="https://www.incharge.org/financial-literacy/budgeting-saving/how-to-make-a-budget/">InCharge - Budgeting</a></li>
                                            
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
