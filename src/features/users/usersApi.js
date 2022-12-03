import { apiSlice } from '../api/apiSlice'

const usersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (data) => ({
                url: '/users',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(_, { queryFulfilled }) {
                // this is newly created user data
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
            }
        }),
        loginUser: builder.mutation({
            query: (data) => ({
                url: '/login',
                method: 'POST',
                body: data
            })
        })
    })
})

export const { useRegisterUserMutation, useLoginUserMutation } = usersApi
