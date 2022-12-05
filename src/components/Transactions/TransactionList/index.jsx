import { useEffect } from 'react'
import { useGetTransactionsQuery } from '../../../features/transactions/transactionsApi'
import TransactionItem from './TransactionItem'
import './index.scss'

export default function TransactionList() {
    // hook from RTK Query for getting all transactions
    const { data, isSuccess, isError, error } = useGetTransactionsQuery()

    useEffect(() => {
        if (isError) {
            console.log(error.data)
        }
    }, [isError, error])

    return (
        <ul className="transaction-list">
            {isSuccess && data.length > 0
                ? data.map((transaction) => (
                      <TransactionItem
                          key={transaction.id}
                          transaction={transaction}
                      />
                  ))
                : isSuccess && data.length <= 0
                ? 'no transactions found'
                : null}
        </ul>
    )
}
