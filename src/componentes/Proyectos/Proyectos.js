import "../Proyectos/Proyectos.css"

function Proyectos() {
    return (
        <section className="proyectos-bg">
            <div className="proyectos-contenido">
                <h2>Proyectos</h2>

                <div className="proyectos-cards">
                    <div className="proy-card card-shadow">
                        <div className="proyecto-miniAlura" />
                        <a href="https://mini-alura-sepia.vercel.app/?email-contato=#" target="_blank" className="proyecto-vinculo">Mini Alura</a>
                    </div>

                    <div className="proy-card card-shadow">
                        <div className="proyecto-apeperia" />
                        <a href="https://apeperia-gold.vercel.app" target="_blank" className="proyecto-vinculo">Apeperia</a>
                    </div>

                    <div className="proy-card card-shadow">
                        <div className="proyecto-fruta" />
                        <a href="https://fruta-y-fruto-tawny.vercel.app" target="_blank" className="proyecto-vinculo">Fruta&Fruto</a>
                    </div>

                    <div className="proy-card card-shadow">
                        <div className="proyecto-barberia" />
                        <a href="https://barberia-alura-one.vercel.app" target="_blank" className="proyecto-vinculo">Barbería Alura</a>
                    </div>

                    <div className="proy-card card-shadow">
                        <div className="proyecto-org" />
                        <a href="https://org-six-sooty.vercel.app" target="_blank" className="proyecto-vinculo">Proyecto Org</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Proyectos