import {  Outlet, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from "../contexts/UserContext";
import { useContext, useEffect } from 'react';

const ProtectedRoute = () => {
    const { user } = useContext(UserContext);
    const location = useLocation(); // Obtiene la ubicación actual
    const navigate = useNavigate(); // Obtén la función navigate

    useEffect(() => {
        if (!user) {
            // Si el usuario no está autenticado, redirige a la página de inicio
            // y guarda la ubicación actual para redirigir después del inicio de sesión.
            navigate("/", { replace: true, state: { from: location } });
        }
    }, [user, location, navigate]);

    return user ? <Outlet /> : null;
};

export default ProtectedRoute;