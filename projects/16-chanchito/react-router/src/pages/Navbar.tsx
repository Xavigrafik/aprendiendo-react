import {  NavLink } from "react-router-dom";

export default function Home() {
    // useNavigate es un hook para navegar programáticamente.
    // Es útil cuando quieres redirigir al usuario después de una acción.

    return (
        <>
            <nav>
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/productos">Productos</NavLink>
                <NavLink to="/user">Usuario</NavLink>
            </nav>
        </>
    );
}