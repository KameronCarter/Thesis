//This page is being created to create a React Component for the Savings page.
//It will be used to display information about saving methods based on user choice (switches the content of the card on savings page)
import { useState } from 'react';
import './OC.css';

function SavingOnClick() {
    const [selected, setSelected] = useState(null);

    const methods = {
        rule503020: {
            title: "50/30/20 Rule",
            text: ( // Passed as a JSX element to allow for the link in the text (otherwise it would just be a string and the link would not work)
                <>
                    {/* 
                        To explain the link, target opens a new page and rel="noopener noreferrer" prevents security vulnerabilities by preventing the new page 
                        from accessing the window.opener property (noopener) and prevents the URL of my page being passed to the new page (noreferrer). Security measure
                    */}
                    <p>Allocate 50% of income to needs, 30% to wants, and 20% to savings. This method is simple and great for beginners to learn about creating and maintaining a
                        budget. However, this is not viable for everyone, especially those with high fixed expenses or low income. Visit
                        {" "}<a href='https://www.ramseysolutions.com/budgeting/50-20-30-budget-rule' target="_blank" rel="noopener noreferrer">here</a>{" "}
                        to determine if this method is right for you.</p>
                </>
            )
        },
        highYield: {
            title: "High-Yield Savings Account",
            text: (
                <>
                    <p>
                        This type of saving account offers higher annual percentage yields (APY) than traditional savings accounts,
                        making it a good option for those looking to earn more interest on their savings. HYSAs are typically offered by online banks and
                        may have higher minimum balance requirements, however, they are still low-risk and provide easy access to your money. If you believe this method is right for you, visit
                        {" "}<a href='https://www.cnbc.com/select/pros-and-cons-high-yield-savings-accounts/?msockid=0f4ad12a4c8b6cca156cc38d4da76d42' target="_blank" rel="noopener noreferrer">here</a>{" "}
                        to find the HYSA that works for you!.
                    </p>
                </>
            )
        },
        automated: {
            title: "Automated Savings",
            text: (
                <>
                    <p>
                        Automated savings is a method that allows you to set up automatic transfers from your checking account to your savings account
                        on a regular basis, such as bi-weekly or monthly. Using this method can help gaurantee that you set aside money
                        for savings each month and can help you build good saving habits. If you think automated savings is right for you, visit
                        {" "}<a href='https://money.usnews.com/money/personal-finance/family-finance/articles/how-to-automate-your-savings' target="_blank" rel="noopener noreferrer">here</a>{" "}
                        for a more in depth look at automated savings.
                    </p>
                </>
            )
        },
        cd: {
            title: "Certificate of Deposit (CD)",
            text: (
                <>
                    <p>
                        Unlike the other methods discussed, you put money into an account that is locked for a fixed period of time in exchange
                        for a higher fixed interest rate. This method is best for money that you won't need immediately and can be a good option for long-term savings goals.
                        If you think this method is right for you, visit
                        {" "}<a href='https://www.investopedia.com/terms/c/certificateofdeposit.asp' target="_blank" rel="noopener noreferrer">here</a>{" "}
                        for a more in depth look at CDs.
                    </p>
                </>
            )
        },
        other: {
            title: "Smaller Things That Can Help You Save",
            text: (
                <>
                    <p>
                        There are also smaller things that can help you save that you might not think about. But, as the saying goes, "every little bit helps".
                        For example, you can save money by making your own coffee instead of buying it, cooking at home instead of eating out, and
                        using coupons when shopping. These small changes can add up over time and help you save more money in the long run. For some more small ways to save visit
                        {" "}<a href='https://www.nerdwallet.com/finance/learn/how-to-save-money?msockid=0f4ad12a4c8b6cca156cc38d4da76d42' target="_blank" rel="noopener noreferrer">here</a>.
                    </p>
                </>
            )
        }

    };

    return (
        <div className={`card slide-card ${selected ? "active" : ""}`}>
            {!selected ? ( //ternary operator to switch between the list of methods and the content of the selected method
                <>
                    <h4>Saving Methods</h4>
                    <p>
                        Select a method below to learn more. <strong>The best saving method
                        depends on your financial goals and risk tolerance</strong>.
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

export default SavingOnClick;