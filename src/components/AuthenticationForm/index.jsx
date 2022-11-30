import './index.scss'

export default function AuthenticationForm({ children, onSubmitHandler }) {
    return (
        <form
            onSubmit={onSubmitHandler}
            className="authentication-form"
        >
            {children}
        </form>
    )
}
