import { apiSlice } from '../api/apiSlice'

const transactionsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createTransaction: builder.mutation({
            query: (data) => ({
                url: '/transactions',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(_, { queryFulfilled, dispatch }) {
                try {
                    // newly created transaction
                    const { data: newTransaction } = await queryFulfilled

                    // adding new transaction to the list immediately after a successful request
                    dispatch(
                        apiSlice.util.updateQueryData(
                            'getTransactions',
                            undefined,
                            (draft) => {
                                draft.push(newTransaction)
                            }
                        )
                    )
                } catch (error) {
                    console.error(error)
                }
            }
        }),
        deleteTransaction: builder.mutation({
            query: (id) => ({
                url: `/transactions/${id}`,
                method: 'DELETE'
            }),
            async onQueryStarted(id, { queryFulfilled, dispatch }) {
                const patchResult = dispatch(
                    apiSlice.util.updateQueryData(
                        'getTransactions',
                        undefined,
                        (draft) => {
                            const existingTransaction = draft.findIndex(
                                (transaction) => transaction.id === id
                            )
                            draft.splice(
                                existingTransaction,
                                existingTransaction + 1
                            )
                        }
                    )
                )

                try {
                    await queryFulfilled
                } catch (error) {
                    patchResult.undo()
                }
            }
        }),
        getTransactions: builder.query({
            query: () => ({ url: '/transactions' })
        })
    })
})

export const {
    useCreateTransactionMutation,
    useDeleteTransactionMutation,
    useGetTransactionsQuery
} = transactionsApi
