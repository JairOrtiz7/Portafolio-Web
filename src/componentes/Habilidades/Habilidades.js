import "../Habilidades/Habilidades.css"

function Habilidades() {
    return (
        <section className="Habilidades-bg">
            <div className="Habilidades-contenido">
                <h2>Habilidades</h2>

                <div className="Habilidades-cards">
                    <div className="hab-card">
                        <div className="hab-html logo-sh" />
                        <p>HTML</p>
                    </div>

                    <div className="hab-card">
                        <div className="hab-js logo-sh" />
                        <p>JavaScript</p>
                    </div>

                    <div className="hab-card">
                        <div className="hab-react logo-sh" />
                        <p>React</p>
                    </div>

                    <div className="hab-card">
                        <div className="hab-css logo-sh" />
                        <p>CSS</p>
                    </div>
                    
                    <div className="hab-card">
                        <div className="hab-github logo-sh" />
                        <p>GitHub</p>
                    </div>

                    <div className="hab-card">
                        <div className="hab-figma logo-sh" />
                        <p>Figma</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Habilidades