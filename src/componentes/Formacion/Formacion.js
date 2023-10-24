import "../Formacion/Formacion.css"

function Formacion() {
    return (
        <section className="Formacion-bg">
            <div className="Formacion-contenido">
                <h2>Formación</h2>

                <div className="Formacion-certificados">
                    <div className="Certificado">
                        <div className="certificado-logo logo-sh" />
                        <a className="certificado-vinculo" href="https://1drv.ms/b/s!ArN7M_I2pCDbgiIxwbjCyt1ihGTH?e=BpdHLM" target="_blank">Certificación Oracle Next ONE de Alura Latam.</a>
                    </div>

                    <div className="Certificado">
                        <div className="certificado-logo logo-sh" />
                        <a href="https://1drv.ms/b/s!ArN7M_I2pCDbgiQiwzz7WjLWlFEA?e=517meV" className="certificado-vinculo" target="_blank">Certificación en Formación Front-end.</a>
                    </div>

                    <div className="Certificado">
                        <div className="certificado-logo logo-sh" />
                        <a href="https://1drv.ms/b/s!ArN7M_I2pCDbgiEInjuhvmh42Kjf?e=ew9Nto" className="certificado-vinculo" target="_blank">Certificación en Formación HTML y CSS.</a>
                    </div>

                    <div className="Certificado">
                        <div className="certificado-logo logo-sh" />
                        <a href="https://1drv.ms/b/s!ArN7M_I2pCDbgiAmymLcRnQllFx5?e=dR0d1d" className="certificado-vinculo" target="_blank">Certificación de React.</a>
                    </div>

                    <div className="Certificado">
                        <div className="certificado-logo logo-sh" />
                        <a href="https://1drv.ms/b/s!ArN7M_I2pCDbgiMA-A-FGOti6srL?e=CCOOmd" className="certificado-vinculo" target="_blank">Certificación en Desarrollo personal.</a>
                    </div>

                    <div className="Certificado">
                        <div className="certificado-logo logo-sh" />
                        <a href="https://1drv.ms/b/s!ArN7M_I2pCDbgh-vFqhq02gVozIl?e=AyDGfL" className="certificado-vinculo" target="_blank">Certificación en Business Agility.</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Formacion