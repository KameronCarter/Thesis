//This page is being created to create a React Component for the Savings page.
//It will be used to display information about saving methods based on user choice (switches the content of the card on savings page)
import { useState } from 'react';
import './OC.css';

function DebtOnClick() {
    const [selected, setSelected] = useState(null);

    const methods = {
        dsa: {
            title: "Debt Snowball vs. Debt Avalanche",
            text: ( // Passed as a JSX element to allow for the link in the text (otherwise it would just be a string and the link would not work)
                <>
                    {/* 
                        To explain the link, target opens a new page and rel="noopener noreferrer" prevents security vulnerabilities by preventing the new page 
                        from accessing the window.opener property (noopener) and prevents the URL of my page being passed to the new page (noreferrer). Security measure
                    */}
                    <p>
                        The <strong>debt snowball method</strong> is a debt repayment strategy where you <strong>pay off your smallest debts first</strong>, while making <strong>minimum payments on your larger debts.</strong> 
                        Once the smallest debt is paid off, you move on to the next smallest debt, and so on. This method can provide a sense of accomplishment and motivation 
                        as you see your debts being paid off one by one. On the other hand, <strong>the debt avalanche method is the opposite, you pay off your highest 
                        interest rate debts first</strong>, while making minimum payments on your lower interest rate debts. This method can save you money in the long run by reducing the 
                        amount of interest you pay over time. To determine which method is best for you, visit
                        {" "}<a href='https://www.nerdwallet.com/personal-loans/learn/pay-off-debt?msockid=0f4ad12a4c8b6cca156cc38d4da76d42' target="_blank" rel="noopener noreferrer">this site</a>
                        and navigate to 'Smaller Debt Loads'.
                    </p>
                </>
            )
        },
        btc: {
            title: "Balance Transfer Cards",
            text: (
                <>
                    <p>
                        A <strong>balance transfer card</strong> is a type of credit card that <strong>allows you to transfer high-interest debt from one or more credit cards to a new card
                        with a lower interest rate</strong>, usually 0% for the first 15-21 months. This method can be used to deal with credit card debt, which is very prevelant in 2026.
                        By transferring your balance to a card with a lower interest rate, you can save money on interest and pay off your debt faster. 
                        However, it is important to <strong>be aware of any fees associated with balance transfers and to make sure you can pay off the balance
                        before the promotional period(15-21 months of 0% interest) ends</strong> because the interest rate can increase significantly after that. If 
                        you think this method is right for you, visit
                        {" "}<a href='https://www.nerdwallet.com/best/credit-cards/balance-transfer?msockid=0f4ad12a4c8b6cca156cc38d4da76d42' target="_blank" rel="noopener noreferrer">here</a>{" "}
                        and go to the 'Larger Debt Loads' section to learn more about balance transfer cards and find the one that works for you.
                    </p>
                </>
            )
        },
        dcl: {
            title: "Debt Consolidation Loans",
            text: (
                <>
                    <p>
                        <strong>A debt consolidation loan</strong> is similar to a balance transfer card in that it <strong>allows you to combine multiple debts into one loan with a
                        lower interest rate.</strong> However, instead of transferring your balance to a new credit card, you take out a personal loan to pay off your 
                        existing debts. This method can be a good option for those who have a lot of high-interest debt and want to simplify their payments.
                        The main thing to consider with this method is to <strong>try and get a lower interest rate than what you are currently paying on your debts</strong>, 
                        otherwise, you may end up paying more in the long run. If you think this method is right for you, visit
                        {" "}<a href='https://www.nerdwallet.com/best/personal-loans/debt-consolidation?msockid=0f4ad12a4c8b6cca156cc38d4da76d42' target="_blank" rel="noopener noreferrer">here</a>{" "}
                        to learn more about debt consolidation loans and find the one that works for you.
                    </p>
                </>
            )
        },
        bankruptcy: {
            title: "Bankruptcy",
            text: (
                <>
                    <p>
                        One of the more severe options for dealing with debt is bankruptcy. <strong>Bankruptcy is a legal process that allows individuals or businesses 
                        to eliminate or repay their debts under the protection of the bankruptcy court</strong>. This method can be a <strong>good option for those who are 
                        overwhelmed by debt</strong> and have no other options for repayment. It is important to be aware of the pros and cons of bankruptcy, as <strong>having 
                        an understanding of the process and its consequences can help you make an informed decision</strong>. To dive into what bankruptcy is and
                        its pros and cons, click 
                        {" "}<a href='https://www.nerdwallet.com/finance/learn/bankruptcy' target="_blank" rel="noopener noreferrer">here</a>{" "}
                    </p>
                </>
            )
        },
        other: {
            title: "Step by Step Repayment Guide",
            text: (
                <>
                    <p>
                        A step by step repayment guide can be a helpful tool for those who are looking for a more structured approach to repaying their debt. 
                        Click the 
                        {" "}<a href='https://www.bestmoney.com/debt-consolidation/articles/how-to-pay-off-debt' target="_blank" rel="noopener noreferrer">link</a>.
                        for a step by step guide to repaying debt
                    </p>
                </>
            )
        }

    };

    return (
        <div className={`card slide-card ${selected ? "active" : ""}`}>
            {!selected ? ( //ternary operator to switch between the list of methods and the content of the selected method
                <>
                    <h4>Debt Repaying Methods</h4>
                    <p>
                        The methods below are some ways to repay debt in 2026, from smallest to largest debt loads. 
                        <strong>Remember the best debt repaying method depends on your personal financial situation and goals!</strong>
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

export default DebtOnClick;