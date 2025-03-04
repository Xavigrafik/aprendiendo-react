import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoginButton from './LoginButton';
import UserAvatar from './UserAvatar';


export function NavMenu() {
    
    const [userIsLogged, setUserIsLogged] = useState(true); 
    
    return (
        <nav className="NavMenu navbar navbar-expand-lg" data-bs-theme="dark">
            <div className="container-xxl">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
                    <div className="navbar-nav me-auto">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        {userIsLogged && <NavLink className="nav-link" to="/add">Reserva fechas</NavLink>}
                        <NavLink className="nav-link" to="/galeria">Galeria</NavLink>
                    </div>

                    {/* <button className='btn btn-primary'>Log me</button> */}

                    <div className="navbar-nav">
                    {userIsLogged ? (
                        <a className="nav-link" to="/login"><UserAvatar/></a>
                    ) : (
                        <LoginButton/>
                    )}
                    </div>
                </div>

            </div>
        </nav>
    );
}
