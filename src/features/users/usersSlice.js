import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    accessToken: undefined,
    email: undefined,
    name: undefined,
    id: undefined
}

const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loggedIn(state, action) {
            state.accessToken = action.payload.accessToken
            state.email = action.payload.email
            state.name = action.payload.name
            state.id = action.payload.id
        },
        logout(state, action) {
            state.accessToken = action.payload
            state.email = action.payload
            state.name = action.payload
            state.id = action.payload

            // clear authenticated user from local storage
            localStorage.removeItem('authenticated_user')
        }
    }
})

export const { loggedIn, logout } = usersSlice.actions
export default usersSlice
