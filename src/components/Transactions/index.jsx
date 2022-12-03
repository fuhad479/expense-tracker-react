import { FormattedNumber } from 'react-intl'
import TransactionForm from '../TransactionForm'
import './index.scss'

export default function Transactions() {
    return (
        <div className="transactions">
            <TransactionForm />
            <div className="transactions-top">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search"
                />
                <div className="transaction-dropdowns">
                    <div className="filters">
                        <div className="all">All</div>
                        <div className="income">Income</div>
                        <div className="expenses">Expenses</div>
                    </div>
                    <div className="sort-dropdown"></div>
                </div>
            </div>
            <div className="transaction-body">
                <ul className="transaction-list">
                    <li className="transaction-item">
                        <span>Lorem, ipsum dolor.</span>
                        <span>
                            <FormattedNumber
                                style={['currency']}
                                currency="USD"
                                value={300}
                            />
                        </span>
                    </li>
                    <li className="transaction-item">
                        <span>Lorem, ipsum dolor.</span>
                        <span>
                            <FormattedNumber
                                style={['currency']}
                                currency="USD"
                                value={300}
                            />
                        </span>
                    </li>
                    <li className="transaction-item">
                        <span>Lorem, ipsum dolor.</span>
                        <span>
                            <FormattedNumber
                                style={['currency']}
                                currency="USD"
                                value={300}
                            />
                        </span>
                    </li>
                    <li className="transaction-item">
                        <span>Lorem, ipsum dolor.</span>
                        <span>
                            <FormattedNumber
                                style={['currency']}
                                currency="USD"
                                value={300}
                            />
                        </span>
                    </li>
                    <li className="transaction-item">
                        <span>Lorem, ipsum dolor.</span>
                        <span>
                            <FormattedNumber
                                style={['currency']}
                                currency="USD"
                                value={300}
                            />
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
