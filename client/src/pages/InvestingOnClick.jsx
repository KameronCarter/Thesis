//This page is being created to create a React Component for the Savings page.
//It will be used to display information about saving methods based on user choice (switches the content of the card on savings page)
import { useState } from 'react';
import './OC.css';

function InvestingOnClick() {
    const [selected, setSelected] = useState(null);

    const methods = {
        stocks: {
            title: "Stocks",
            text:  (
                <>
                    <p>
                        Stocks are essentially shares of ownership in a company, meaning why you buy a stock, you are buying a small piece of that company.
                        They are considered a higher risk investment, with multiple types of stocks avalaible, such as growth stocks, value stocks, and dividend stocks.
                        However, they also have the potential for higher returns than other investments. If you think stocks are right for you, visit
                        {" "}<a href='https://www.fidelity.com/learning-center/smart-money/what-are-stocks' target="_blank" rel="noopener noreferrer">here</a>{" "}
                        for a more in depth look at stocks and how to get started. 
                    </p>
                </>
            )
        },
        bonds: {
            title: "Bonds",
            text: (
                <>
                    <p>
                        Bonds are loans that investors make to corporations or governments in exchange for regular interest payments and the return of the bond's 
                        face value (how much you paid for it) when the bond matures. They are considered a lower risk investment with a lower potential return than stocks, but they 
                        can provide a steady stream of income and can be a good option for those looking to diversify their investment portfolio. Similar to stocks, there are 
                        a multitude of bond types available, such as agency bonds, corporate bonds, and municipal bonds. If you think bonds are right for you, visit
                        {" "}<a href='https://www.fidelity.com/learning-center/investment-products/fixed-income-bonds/what-is-a-bond' target="_blank" rel="noopener noreferrer">here</a>{" "}
                        for more information on bonds and how to get started.
                    </p>
                </>
            )
        },
        mutualfunds: {
            title: "Mutual Funds",
            text: (
                <>
                    <p>
                        Investment funds are professionally managed portfolios that are made for a specific financial goal. There are many types of funds, but one of the most common types is mutual funds.
                        Mutual funds are investment funds that pool money from multiple investors to purchase a diversified portfolio of stocks, bonds, or other securities. 
                        They are managed by professional fund managers and offer a convenient way to invest in a wide range of assets without having to select individual investments yourself. 
                        If you think mutual funds are right for you, visit
                        {" "}<a href='https://www.fidelity.com/learning-center/investment-products/mutual-funds/what-are-mutual-funds' target="_blank" rel="noopener noreferrer">here</a>{" "}
                        for more information on mutual funds and how to get started.
                    </p>
                </>
            )
        },
        help: {
            title: "Where and How to Start?",
            text: (
                <>
                    <p>
                        If investing is something that you are interested in after reading about it here, visit,
                        {" "}<a href='https://www.forbes.com/advisor/l/investment-management-firms-in-the-us/?check=b&utm_source=bing&check=b&utm_source=bing&utm_medium=cpc&account_id=150496917&utm_content=1313918806351905&utm_term=kwd-82121091448070:loc-190&utm_campaign=686997417&network=o&device=c&msclkid=06d0ce355abb160b95c8a7a9ab278dec' target="_blank" rel="noopener noreferrer">here</a>{" "}
                        to find a great starting point in your investing journey. This resources helps pair you with the right investment management firm for you.
                    </p>
                </>
            )
        }
    };

    return (
        <div className={`card slide-card ${selected ? "active" : ""}`}>
            {!selected ? ( //ternary operator to switch between the list of methods and the content of the selected method
                <>
                    <h4>Investing Methods</h4>
                    <p>
                        Select a method below to learn more. The best investing method
                        depends on your financial goals and risk tolerance.
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

export default InvestingOnClick;