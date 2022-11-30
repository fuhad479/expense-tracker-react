import { Link } from 'react-router-dom'
import { PersonIcon } from '@radix-ui/react-icons'
import { EnvelopeClosedIcon } from '@radix-ui/react-icons'
import { LockClosedIcon } from '@radix-ui/react-icons'
import FormField from '../../components/FormField'
import './index.scss'

export default function Register() {
    return (
        <div className="register-page">
            <form
                onSubmit={() => console.log('on submit handler')}
                className="registration-form"
            >
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
                    icon={<EnvelopeClosedIcon />}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="E-mail"
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
                <Link to="/login">Already have an account? Login.</Link>
                <input
                    type="submit"
                    value="Create account"
                />
            </form>
        </div>
    )
}
