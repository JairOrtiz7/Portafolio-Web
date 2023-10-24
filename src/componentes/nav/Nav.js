import "../nav/Nav.css"

function Nav() {
    return (
        <div className="nav-bg">
            <div className="nav-grupos">
                <div className="nav-logo">
                    <p>Jair Ortiz</p>
                    <div className="nav-img" />
                </div>

                <nav className="nav-principal">
                    <a className="nav-texto" href="#sobremi">Sobre mí</a>
                    <a className="nav-texto" href="#habilidades">Habilidades</a>
                    <a className="nav-texto" href="#formacion">Formación</a>
                    <a className="nav-texto" href="#proyectos">Proyectos</a>
                    <div className="borde-bajo"></div>
                </nav>
            </div>
        </div>
    );
}

export default Nav