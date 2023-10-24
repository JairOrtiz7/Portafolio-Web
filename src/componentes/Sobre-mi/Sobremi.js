import "../Sobre-mi/Sobremi.css"

function SobreMi() {
    return (
        <section className="SobreMi-bg">
            <div className="SobreMi-contenido">
                <h2>Sobre mí</h2>

                <div className="SobreMi-contenedor">
                    <div className="SobreMi-text-img">
                        <p className="SobreMi-texto">
                            Estudiante egresado de la universidad politécnica del estado de Guerrero.
                            Participé en el programa Oracle Next ONE de Alura Latam. 
                            Me gusta mucho el diseño y la creación de páginas web.
                        </p>

                        <p className="SobreMi-texto">
                            Soy una persona muy creativa con muchas ganas de aprender y sobre todo, 
                            con muchas ganas de trabajar.
                        </p>

                        <p className="SobreMi-texto">
                            Mis pasatiempos son: jugar videojuegos, escuchar música, usar mi ordenador, 
                            pasear en bicicleta e ir de compras al super.
                            Me gustan los animales en general, en especial los perros y los gatos.
                        </p>
                    </div>

                    <div className="SobreMi-imagen"/>
                </div>

            </div>
        </section>
    );
}

export default SobreMi