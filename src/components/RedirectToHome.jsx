import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectToHome = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/');
    }, [navigate]);

    return null; // No necesitas renderizar nada
}

export default RedirectToHome