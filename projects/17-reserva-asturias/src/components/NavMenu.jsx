import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import LoginButton from './LoginButton';
import UserAvatar from './UserAvatar';
import { UserContext } from "../contexts/UserContext";


export function NavMenu() {

    const { user } = useContext(UserContext);
    
    
    return (
        <nav className="NavMenu navbar navbar-expand-lg" data-bs-theme="dark">
            <div className="container-xxl">
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
                    <div className="navbar-nav me-auto">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        {user.name && <NavLink className="nav-link" to="/add">Reserva fechas</NavLink>}
                        <NavLink className="nav-link" to="/galeria">Galeria</NavLink>
                    </div>


                    <div className="navbar-nav">
                        {user.name ? (
                            <a className="nav-link" to="/login"><UserAvatar/></a>
                        ) : (
                            <LoginButton></LoginButton>
                        )}
                    </div>
                </div>

            </div>
        </nav>
    );
}
