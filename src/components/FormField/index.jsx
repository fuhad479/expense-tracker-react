import './index.scss'

export default function FormField({
    icon,
    type,
    name,
    id,
    placeholder,
    value,
    onChangeHandler
}) {
    return (
        <div className="form-field">
            <label htmlFor={id}>{icon}</label>
            <input
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChangeHandler}
            />
        </div>
    )
}
