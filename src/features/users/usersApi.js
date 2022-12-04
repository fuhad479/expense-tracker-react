import { apiSlice } from '../api/apiSlice'
import { loggedIn } from '../users/usersSlice'

const usersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (data) => ({
                url: '/users',
                method: 'POST',
                body: data
            })
        }),
        loginUser: builder.mutation({
            query: (data) => ({
                url: '/login',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(_, { queryFulfilled, dispatch }) {
                // this is new user data after logging in
                const {
                    data: {
                        accessToken,
                        user: { email, name, id }
                    }
                } = await queryFulfilled

                // saving new user to local storage for login persistancy
                localStorage.setItem(
                    'authenticated_user',
                    JSON.stringify({ accessToken, name, email, id })
                )

                dispatch(loggedIn({ accessToken, email, name, id }))
            }
        })
    })
})

export const { useRegisterUserMutation, useLoginUserMutation } = usersApi
