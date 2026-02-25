//This page is being created to create a React Component for the Savings page.
//It will be used to display information about saving methods based on user choice (switches the content of the card on savings page)
import { useState } from 'react';
import './OC.css';

function LoanOnClick() {
    const [selected, setSelected] = useState(null);

    const methods = {
        personal: {
            title: "Personal Loans",
            text: ( // Passed as a JSX element to allow for the link in the text (otherwise it would just be a string and the link would not work)
                <>
                    {/* 
                        To explain the link, target opens a new page and rel="noopener noreferrer" prevents security vulnerabilities by preventing the new page 
                        from accessing the window.opener property (noopener) and prevents the URL of my page being passed to the new page (noreferrer). Security measure
                    */}
                    <p>
                        A <strong>personal loan is a loan that is typically unsecured, meaning it does not require collateral, and can be used for a variety of purposes</strong>  such
                        as debt consolidation, home improvement, or unexpected expenses. Since they are unsecured, they often have <strong>higher interest rates</strong> than their securedcounterparts.
                        Personal loans can be a good option for those who need to borrow money but do not have assets to use as collateral, but it is important
                        to understand the terms and conditions of the loan, such as the interest rate, repayment period, and any fees associated with the loan. This
                        {" "}<a href='https://www.nerdwallet.com/best/personal-loans?msockid=0f4ad12a4c8b6cca156cc38d4da76d42' target="_blank" rel="noopener noreferrer">link</a>{" "}
                        has a step by step guide to applying for a personal loan.
                    </p>
                </>
            )
        },
        mortgage: {
            title: "Mortgage Loan",
            text: (
                <>
                    <p>
                        A <strong>mortgage loan is a loan used to purchase a home or other real estate property</strong>. The loan is secured by offering the property being purchased
                        as collateral, meaning that if you fail to make payments, the lender can take possession of the property. Mortgage loans <strong>typically have lower interest rates</strong> than personal loans
                        because they are secured by collateral. If you are considering taking out a mortgage loan, it is important to understand the terms and conditions of the loan,
                        such as the interest rate, repayment period, and any fees associated with the loan. This {" "}<a href='https://www.investopedia.com/terms/m/mortgage.asp' target="_blank" rel="noopener noreferrer">link</a>{" "}
                        has more information on mortgage loans if this loan is the right choice for you.
                    </p>
                </>
            )
        },
        auto: {
            title: "Auto Loan",
            text: (
                <>
                    <p>
                        An <strong>auto loan is a loan used to purchase a vehicle</strong> and, like a mortgage loan, is secured by the vehicle being purchased
                        as collateral. The terms vary from loan to loan, but <strong>typically auto loans have a repayment period of 3-7 years and interest rates
                            that are higher than mortgage loans but lower than personal loans.</strong> There are many outlets to get an auto loan, such as banks, credit unions,
                        and even the dealership itself. If you are considering taking out an auto loan, <strong>you must understand the terms and compare offers from different
                            lenders</strong> to ensure you are getting the best deal. This
                        {" "}<a href='https://www.nerdwallet.com/best/auto-loans?msockid=0f4ad12a4c8b6cca156cc38d4da76d42' target="_blank" rel="noopener noreferrer">site</a>{" "}
                        delves deeper into auto loans, visiting it can help you determine if an auto loan is right for you and how to get the best deal on an auto loan.
                    </p>
                </>
            )
        },
        sl: {
            title: "Student Loans",
            text: (
                <>
                    <p>
                        Tackling the monster that is student loans can be daunting, but understanding the different types of student loans and repayment options
                        can help make the process more manageable. A student loan is <strong>a loan designed to help students pay for post-secondary education and the associated
                        fees</strong>, such as tuition, books, and living expenses. There are <strong>two main types of student loans:</strong> federal student loans and private student loans. 
                        <strong>Federal student loans are funded by the government while private student loans are funded by banks, credit unions, or other financial institutions.</strong>
                        The former has lower fixed interest rates, set by congress each year, and more flexible repayment options, while private loans' terms differ
                        from borrower to borrower. Each type has its own pros and cons, so it is important to understand the differences between the two and to research your options.
                        This 
                        {" "}<a href='https://www.savingforcollege.com/article/how-do-student-loans-work' target="_blank" rel="noopener noreferrer">site</a>{" "}
                        discussess the differences between federal and private student loans and all the things present in each type of loan.
                    </p>
                </>
            )
        }

    };

    return (
        <div className={`card slide-card ${selected ? "active" : ""}`}>
            {!selected ? ( //ternary operator to switch between the list of methods and the content of the selected method
                <>
                    <h4>Types of Loans</h4>
                    <p>
                        There are many loan types available but some are more common than others.
                        Select a common loan type below to learn more. <strong>The best loan type
                        depends on your financial goals, financial health, and risk tolerance</strong>.
                    </p>

                    <ul className="saving-list">
                        {Object.keys(methods).map((key) => (
                            <li
                                key={key}
                                onClick={() => setSelected(key)}
                            >
                                {methods[key].title}
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <div className="method-content">
                    <h4>{methods[selected].title}</h4>
                    <p>{methods[selected].text}</p>

                    <button
                        className="btn btn-custom w-100 rounded-3 mb-3"
                        onClick={() => setSelected(null)}
                    >
                        Back
                    </button>
                </div>
            )}
        </div>
    );
}

export default LoanOnClick;