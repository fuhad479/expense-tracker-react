import './index.scss'

export default function TransactionForm() {
    return (
        <form className="transaction-form">
            <div className="transaction-form-fields">
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value=""
                    onChange={() => console.log('on change handler')}
                />
                <input
                    type="text"
                    name="amount"
                    id="amount"
                    placeholder="Amount"
                    value=""
                    onChange={() => console.log('on change handler')}
                />
                <select
                    name="transaction-type"
                    id="transaction-type"
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
