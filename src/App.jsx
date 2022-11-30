import { Routes, Route } from 'react-router-dom'
import Register from './routes/Register'
import Login from './routes/Login'
import Transactions from './routes/Transactions'

export default function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Register />}
            />
            <Route
                path="/login"
                element={<Login />}
            />
            <Route
                path="/transactions"
                element={<Transactions />}
            />
        </Routes>
    )
}
