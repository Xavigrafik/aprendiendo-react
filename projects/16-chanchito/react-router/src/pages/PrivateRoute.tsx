import { Navigate } from "react-router-dom";
import type { PropsWithChildren } from "react";

// En una aplicación real, este valor vendría de un estado global o de un Context
const isLoggedIn = true;

type Props = PropsWithChildren<object>;

const PrivateRoute = ({ children }: Props) => {
    if (!isLoggedIn) {
        // Si el usuario no está autenticado, lo redirige a la página de login
        // (asumiendo que tienes una ruta para '/login')
        return <Navigate to="/login" />;
    }
    
    // Si está autenticado, renderiza las rutas anidadas
    return children;
};

export default PrivateRoute;