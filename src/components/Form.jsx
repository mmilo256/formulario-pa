import { useCallback, useEffect } from "react";

const Form = ({ children }) => {

    // Callback que ejecuta la advertencia
    const warnUser = useCallback((event) => {
        event.preventDefault();
        event.returnValue = ''; // Para navegadores modernos
        return ''; // Para compatibilidad con otros navegadores
    }, []);

    useEffect(() => {
        // Agregar el evento al montar el componente
        window.addEventListener('beforeunload', warnUser);

        // Limpiar el evento al desmontar el componente
        return () => {
            window.removeEventListener('beforeunload', warnUser);
        };
    }, [warnUser]);


    return (
        <>
            <form className="container mt-4 p-4 rounded  mx-auto" action="">
                {children}
            </form>
        </>
    )
}

export default Form