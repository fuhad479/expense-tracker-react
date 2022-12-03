import Sidebar from '../../components/Sidebar'
import TransactionsList from '../../components/Transactions'
import './index.scss'

export default function Transactions() {
    return (
        <div className="transactions-page">
            <div className="transactions-content">
                <Sidebar />
                <TransactionsList />
            </div>
        </div>
    )
}
