import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { EnvelopeClosedIcon } from '@radix-ui/react-icons'
import { LockClosedIcon } from '@radix-ui/react-icons'
import { useLoginUserMutation } from '../../features/users/usersApi'
import AuthenticationForm from '../../components/AuthenticationForm'
import FormField from '../../components/FormField'
import './index.scss'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // redirection hook from react-router-dom
    const navigate = useNavigate()

    // hook from RTK Query
    const [loginUser, { data, isSuccess, isError, error }] =
        useLoginUserMutation()

    // login form submit handler function
    function onSubmitHandler(event) {
        event.preventDefault()
        // login function from RTK Query
        loginUser({ email, password })
    }

    // redirecting to transactions page after logging in
    useEffect(() => {
        if (isSuccess) {
            navigate('/transactions')
            console.log(data)
        } else if (isError) {
            console.log(error.data)
        }
    }, [isSuccess, navigate, data, isError, error])

    return (
        <div className="login-page">
            <AuthenticationForm
                onSubmitHandler={onSubmitHandler}
                className="login-form"
            >
                <FormField
                    icon={<EnvelopeClosedIcon />}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="E-mail"
                    value={email}
                    onChangeHandler={(event) => setEmail(event.target.value)}
                />
                <FormField
                    icon={<LockClosedIcon />}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChangeHandler={(event) => setPassword(event.target.value)}
                />
                <Link to="/">Don't have an account? Signup.</Link>
                <input
                    type="submit"
                    value="Login"
                />
            </AuthenticationForm>
        </div>
    )
}
