import "../Formacion/Formacion.css"

function Formacion() {
    return (
        <section className="Formacion-bg">
            <div className="Formacion-contenido">
                <h2>Formación</h2>

                <div className="Formacion-certificados">
                    <div className="Certificado">
                        <div className="certificado-logo logo-sh" />
                        <a className="certificado-vinculo" href="https://1drv.ms/b/s!ArN7M_I2pCDbgiKGjbs-rvyFhUQo?e=4cLEOd" target="noreferrer">Certificación Oracle Next ONE de Alura Latam.</a>
                    </div>

                    <div className="Certificado">
                        <div className="certificado-logo logo-sh" />
                        <a href="https://1drv.ms/b/s!ArN7M_I2pCDbgiSI_b5sCH4Otfk5?e=Cte9t8" className="certificado-vinculo" target="noreferrer">Certificación en Formación Front-end.</a>
                    </div>

                    <div className="Certificado">
                        <div className="certificado-logo logo-sh" />
                        <a href="https://1drv.ms/b/s!ArN7M_I2pCDbgiHtDHmbahB-W9ow?e=Lhx1p1" className="certificado-vinculo" target="noreferrer">Certificación en Formación HTML y CSS.</a>
                    </div>

                    <div className="Certificado">
                        <div className="certificado-logo logo-sh" />
                        <a href="https://1drv.ms/b/s!ArN7M_I2pCDbgiDuGK51c93C1137?e=pZZcvq" className="certificado-vinculo" target="noreferrer">Certificación de React.</a>
                    </div>

                    <div className="Certificado">
                        <div className="certificado-logo logo-sh" />
                        <a href="https://1drv.ms/b/s!ArN7M_I2pCDbgiOL0MhgskCt1_BB?e=VejZdx" className="certificado-vinculo" target="noreferrer">Certificación en Desarrollo personal.</a>
                    </div>

                    <div className="Certificado">
                        <div className="certificado-logo logo-sh" />
                        <a href="https://1drv.ms/b/s!ArN7M_I2pCDbgh9FK9c6Wqq2camv?e=tacFMY" className="certificado-vinculo" target="noreferrer">Certificación en Business Agility.</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Formacion