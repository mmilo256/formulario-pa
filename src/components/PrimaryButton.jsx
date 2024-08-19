import { NavLink } from 'react-router-dom'

const PrimaryButton = ({ children, type = "button", href, onClick }) => {
    const buttonStyles = "block bg-blue-700 hover:bg-blue-600 rounded text-white w-min px-4 py-2"

    return (
        type === "link" ? <NavLink className={buttonStyles} to={href}>{children}</NavLink> : <button type='button' onClick={onClick} className={buttonStyles}>{children}</button>
    )
}

export default PrimaryButton