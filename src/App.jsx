import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useAuth } from './hooks/useAuth'
import { loggedIn } from './features/users/usersSlice'
import Register from './routes/Register'
import Login from './routes/Login'
import Transactions from './routes/Transactions'

export default function App() {
    const isAuthenticated = useAuth()

    // dispatch function from redux
    const dispatch = useDispatch()

    useEffect(() => {
        // authenticated user from local storage
        const authenticatedUser = JSON.parse(
            localStorage.getItem('authenticated_user')
        )

        if (authenticatedUser) {
            dispatch(loggedIn({ ...authenticatedUser }))
        }
    }, [])

    return (
        <Routes>
            <Route
                path="/"
                element={
                    isAuthenticated ? (
                        <Navigate to="/transactions" />
                    ) : (
                        <Register />
                    )
                }
            />
            <Route
                path="/login"
                element={
                    isAuthenticated ? (
                        <Navigate to="/transactions" />
                    ) : (
                        <Login />
                    )
                }
            />
            <Route
                path="/transactions"
                element={
                    !isAuthenticated ? (
                        <Navigate to="/login" />
                    ) : (
                        <Transactions />
                    )
                }
            />
        </Routes>
    )
}
