import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useCreateTransactionMutation } from '../../features/transactions/transactionsApi'
import './index.scss'

export default function TransactionForm() {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [transactionType, setTransactionType] = useState('')

    // authenticated user data from redux store
    const { email, name: username, id } = useSelector((state) => state.users)

    // hook from RTK Query
    const [createTransaction, { data, isSuccess, isError, error }] =
        useCreateTransactionMutation()

    // transaction form submit handler
    function onSubmitHandler(event) {
        event.preventDefault()
        // create transaction function from RTK Query for creating a transaction
        createTransaction({
            name,
            amount,
            type: transactionType,
            author: { email, name: username, id }
        })
    }

    // handling side effects
    useEffect(() => {
        if (isSuccess) {
            setName('')
            setAmount('')
        } else if (isError) {
            console.log(error.data)
        }
    }, [isSuccess, data, isError, error])

    return (
        <form
            className="transaction-form"
            onSubmit={onSubmitHandler}
        >
            <div className="transaction-form-fields">
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <input
                    type="number"
                    name="amount"
                    id="amount"
                    placeholder="Amount"
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                />
                <select
                    name="transaction-type"
                    id="transaction-type"
                    onChange={(event) => setTransactionType(event.target.value)}
                >
                    <option value="">Select an item</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
            </div>
            <input
                type="submit"
                value="Save transaction"
            />
        </form>
    )
}
