import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { PersonIcon } from '@radix-ui/react-icons'
import { EnvelopeClosedIcon } from '@radix-ui/react-icons'
import { LockClosedIcon } from '@radix-ui/react-icons'
import { useRegisterUserMutation } from '../../features/users/usersApi'
import AuthenticationForm from '../../components/AuthenticationForm'
import FormField from '../../components/FormField'
import './index.scss'

export default function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // redirect hook from react-router dom
    const navigate = useNavigate()

    // hook from RTK Query
    const [registerUser, { data, isSuccess, isError, error }] =
        useRegisterUserMutation()

    // registration form submit handler function
    function onSubmitHandler(event) {
        event.preventDefault()
        // registration function from RTK Query
        registerUser({ name: username, email, password })
    }

    // redirect to login page after registering an account
    useEffect(() => {
        if (isSuccess) {
            navigate('/login')
            // console.log(data)
        } else if (isError) {
            console.log(error.data)
        }
    }, [isSuccess, navigate, data, isError, error])

    return (
        <div className="register-page">
            <AuthenticationForm
                onSubmitHandler={onSubmitHandler}
                className="registration-form"
            >
                <FormField
                    icon={<PersonIcon />}
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChangeHandler={(event) => setUsername(event.target.value)}
                />
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
                <Link to="/login">Already have an account? Login.</Link>
                <input
                    type="submit"
                    value="Create account"
                />
            </AuthenticationForm>
        </div>
    )
}
