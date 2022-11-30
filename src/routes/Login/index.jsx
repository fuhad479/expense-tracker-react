import { Link } from 'react-router-dom'
import { PersonIcon } from '@radix-ui/react-icons'
import { LockClosedIcon } from '@radix-ui/react-icons'
import AuthenticationForm from '../../components/AuthenticationForm'
import FormField from '../../components/FormField'
import './index.scss'

export default function Login() {
    return (
        <div className="login-page">
            <AuthenticationForm>
                <FormField
                    icon={<PersonIcon />}
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    value=""
                    onChangeHandler={() =>
                        console.log('onChangeHandler function')
                    }
                />
                <FormField
                    icon={<LockClosedIcon />}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value=""
                    onChangeHandler={() =>
                        console.log('onChangeHandler function')
                    }
                />
                <Link to="/login">Don't have an account? Signup.</Link>
                <input
                    type="submit"
                    value="Login"
                />
            </AuthenticationForm>
        </div>
    )
}
