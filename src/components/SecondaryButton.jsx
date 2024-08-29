import { NavLink } from 'react-router-dom'

const SecondaryButton = ({ children, type = "button", href, onClick }) => {
    const buttonStyles = "bg-white block hover:bg-blue-200 rounded text-blue-700 px-4 py-2"

    return (
        type === "link" ? <NavLink className={buttonStyles} to={href}>{children}</NavLink> : <button type='button' onClick={onClick} className={buttonStyles}>{children}</button>
    )
}

export default SecondaryButton