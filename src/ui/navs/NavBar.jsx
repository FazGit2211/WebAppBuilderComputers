import './navStyles.css'
export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-custom navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand">Logo</a>
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link navbar-brand" href="/Home">Inicio</a></li>
                        <li className="nav-item"><a className="nav-link navbar-brand" href="#">Iniciar Sesión</a></li>
                        <li className="nav-item"><a className="nav-link navbar-brand" href="#">Registrarce</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}