import { NavLink } from "react-router-dom"

const Sidebar = () => {
    return (
        <div className=" w-48">
            <div className="fixed flex flex-col gap-4 pt-20 w-36 px-2 bg-blue-700 top-0 bottom-0 text-white font-semibold">
                <NavLink to="/">1. Identificación</NavLink>
                <NavLink to="marco-normativo">2. Marco Normativo</NavLink>
                <NavLink to="usuarios">3. Usuarios(as)</NavLink>
                <NavLink to="soporte-electronico">4. Soporte Electrónico</NavLink>
                <NavLink to="identidad-digital">5. Identidad Digital</NavLink>
                <NavLink to="notificaciones">6. Notificaciones</NavLink>
                <NavLink to="datos-documentos">7. Datos y documentos requeridos</NavLink>
            </div>



        </div>
    )
}

export default Sidebar