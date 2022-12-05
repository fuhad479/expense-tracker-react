import { useEffect } from 'react'
import { TrashIcon, Pencil2Icon } from '@radix-ui/react-icons'
import { FormattedNumber } from 'react-intl'
import { useDeleteTransactionMutation } from '../../../../features/transactions/transactionsApi'
import './index.scss'

export default function TransactionItem({ transaction }) {
    const { name, amount, type, id } = transaction

    // hook from RTK Query
    const [deleteTransaction, { data, isSuccess, isError, error }] =
        useDeleteTransactionMutation()

    useEffect(() => {
        if (isSuccess) {
            console.log(data)
        } else if (isError) {
            console.log(error)
        }
    }, [isSuccess, data, isError, error])

    return (
        <li className="transaction-item">
            <span>{name}</span>
            <span>
                <FormattedNumber
                    style={['currency']}
                    currency="USD"
                    value={type === 'expense' ? `-${amount}` : amount}
                />
            </span>
            <div className="transaction-actions">
                {/* <DotsVerticalIcon /> */}
                <Pencil2Icon />
                <TrashIcon onClick={() => deleteTransaction(id)} />
            </div>
        </li>
    )
}
