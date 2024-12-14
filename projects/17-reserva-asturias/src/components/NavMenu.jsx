
export function NavMenu() {
    return (
        <nav className="NavMenu navbar bg-dark border-bottom border-body navbar-expand-lg" data-bs-theme="dark">
            <div className="container-xxl">
                <a className="navbar-brand" href="#">
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
                    <div className="navbar-nav me-auto">
                        <a className="nav-link" href="#">Reservas</a>
                        <a className="nav-link" href="#">Añadir reserva</a>
                    </div>

                    <div className="navbar-nav">
                        <a className="nav-link" href="#">Log in</a>
                    </div>
                </div>

            </div>
        </nav>
    );
}
