import React from 'react';
import Navbar from '../components/Navbar.jsx';
import './Pages.css';

function Home() {
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
                                    <h4><strong>Introduction to Financial Literacy</strong></h4>

                                    <p className="left-section">
                                        To begin understanding what financial literacy is, we must first define it. <strong>Financial literacy is the ability to understand and
                                            effectively use various financial skills</strong>, including budgeting, investing, borrowing, taxation, and personal financial management. We can split it into
                                        <strong> three main components: financial knowledge, financial behavior, and financial attitude.</strong> Each component plays a part in
                                        shaping an individual's overall financial literacy. When COVID hit the United States, we strayed away from the use of cash
                                        and moved towards a more digital economy. This shift has made it even more crucial for individuals to be financially literate which
                                        is why this site aims to provide its users with the necessary knowledge on personal finance topics to improve financial literacy. Even though
                                        this site is targeted towards college students, <strong>financial literacy is important for people of all ages </strong>.
                                    </p>
                                </div>
                                <hr />
                                <div className="card">
                                    <h4 className="right-section"><strong>Three Components</strong></h4>

                                    <p className="right-section">
                                        The first component, <strong>financial knowledge</strong>, refers to an <strong>individual's understanding of financial concepts and products</strong>. Concepts would entail things like net worth, interest rates, and credit scores while products would entail things like credit cards, loans, and investments.
                                        The next component, <strong>financial behavior</strong>, refers to the <strong>actions individuals take regarding their finances</strong>, such as budgeting,
                                        saving, and investing. Last but not least, <strong>financial attitude</strong>, refers to an <strong>individual's mindset and beliefs about money and finances</strong>.
                                        If you are knowledgeable about personal finance topics, practice good financial habits, and have a positive attitude towards money management,
                                        you are more likely to make informed financial decisions and achieve financial well-being. Each page on this site will cover the main topics
                                        that contribute to financial literacy including savings, managing credit, debt, & loans, and how to budget effectively.
                                    </p>
                                </div>
                                <hr />
                                <div className="card">
                                    <h4><strong>The Importance of Financial Literacy in College Students</strong></h4>
                                    <p className="left-section">
                                        Financial literacy equips individuals with the knowledge to make informed financial decisions, contributing to personal and economic stability.
                                        <strong>Without the knowledge embedded in financial literacy, an individual will have a hard time navigating the economy.</strong>
                                        This has become a global realization with the focus being shifted towards the youth which is, according to the UN, ages 15-24. This age group
                                        can most benefit from financial literacy education due to the fact that college debt is at an all time high. <strong>Being financially literate can help
                                        you navigate the complexities of student loans, credit cards, and budgeting</strong> for the first time. It can also help you <strong>avoid common financial pitfalls</strong> like 
                                        overspending on food, entertainment, and clothing. <strong>By improving your personal finance skills you can set yourself up for a
                                        successful financial future right after college.</strong>
                                    </p>
                                </div>
                                <footer className="footer">
                                    <h6>Learn more about financial literacy below</h6>
                                    <p>
                                        <ul>
                                            <li><a href="https://corporatefinanceinstitute.com/resources/wealth-management/financial-literacy/">Corporate Finance Institute - Financial Literacy</a></li>
                                            <li><a href="https://www.investopedia.com/terms/f/financial-literacy.asp">Investopedia - Financial Literacy</a></li>
                                            <li><a href="https://moneyzine.com/personal-finance/financial-literacy-statistics/">MoneyZine - Financial Literacy Statistics</a></li>
                                        </ul>
                                    </p>
                                </footer>

                            </section>

                            <aside className="sidebar">
                                <h5>Quick Learning</h5>
                                <ul>
                                    <li>Financial literacy is the ability to understand and effectively use various financial skills</li>
                                    <li>Financial literacy consists of three main components: financial knowledge, financial behavior, and financial attitude.</li>
                                    <li>Understanding the three main components can lead to better financial decision-making.</li>
                                    <li>College Students can set themselves up for financial success after college by being financially literate.</li>
                                    <li>Financial literacy is a lifelong journey, and it's never too late to start learning.</li>
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
