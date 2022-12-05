import TransactionForm from '../TransactionForm'
import TransactionList from './TransactionList'
import Pagination from '../Pagination'
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
                <TransactionList />
                <Pagination />
            </div>
        </div>
    )
}
