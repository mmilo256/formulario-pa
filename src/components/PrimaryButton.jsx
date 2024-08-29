import { NavLink } from 'react-router-dom'

const PrimaryButton = ({ children, type = "button", href, onClick, disabled }) => {
    const buttonStyles = "block bg-blue-700 hover:bg-blue-600 disabled:bg-blue-400 disabled:cursor-not-allowed rounded text-white px-4 py-2"

    return (
        type === "link" ? <NavLink className={buttonStyles} to={href}>{children}</NavLink> : <button disabled={disabled} type='button' onClick={onClick} className={buttonStyles}>{children}</button>
    )
}

export default PrimaryButton