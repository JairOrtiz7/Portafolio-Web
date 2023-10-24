import "../Footer/Footer.css"

function Footer() {
    return (
        <section className="footer-bg">
            <div className="footer-contenido">
                <div className="footer-logo">
                    <p>Jair Ortiz</p>
                    <div className="nav-img" />
                </div>

                <div className="footer-logos">
                    <a href="https://www.linkedin.com/in/jairortiz7?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAD8ztWIBZe7_6sW9r42x3Cbut1q_2oxlhpE&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Bwz1yJvGfTseJScT%2B5lBz5g%3D%3D" target="_blank" className="logo-linkedin" />
                    <a href="https://github.com/JairOrtiz7" target="_blank" className="logo-github" />
                    <a href="https://wa.link/r1qlzu" target="_blank" className="logo-whatsapp" />
                </div>

                <p className="footer-texto">Creado por Jair Ortiz Plácido.</p>
                <p className="footer-texto2">¡Si lo puedes imaginar, lo puedes programar!</p>
            </div>
        </section>
    );
}

export default Footer