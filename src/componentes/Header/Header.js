import "../Header/Header.css"
import Button from '@mui/material/Button';
import { createTheme,ThemeProvider } from '@mui/material/styles';

function Header() {

const theme = createTheme({
    palette: {
        aqua: {
                main: '#AFCAF3',
                light: '#E9DB5D',
                dark: '#778AA6',
                contrastText: '#33415C',
            },
        },
    });

    return (
        <section className="portada-bg">
            <div className="portada-contenido">
                <div className="inf-img">
                    <div className="portada-textos">
                        <p className="titulo">Hola! Soy</p>
                        <h1>Jair Ortiz Plácido.</h1>
                        <p className="texto-info">
                            Soy programador Front End Jr. Este es mi portafolio para que las personas puedan conocer
                            mi trabajo y mis habilidades.
                        </p>
                        <p className="texto-info2">
                            Puedes obtener más información acerca de mí:
                        </p>
                    </div>
                    
                    <div className="portada-botones">
                        <ThemeProvider theme={theme}>
                            <Button className="boton" color="aqua" href="https://www.linkedin.com/in/jairortiz7?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAD8ztWIBZe7_6sW9r42x3Cbut1q_2oxlhpE&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BW1zcBn9HR6aTURr5xrff7w%3D%3D" target="_blank" variant="contained">Visitar LinkedIn</Button>
                            <Button className="boton" color="aqua" href="https://1drv.ms/b/s!ArN7M_I2pCDbgijjXvUya2kTbf96?e=O88Dse" target="_blank" variant="contained">Descargar C.V</Button>
                        </ThemeProvider>
                    </div>
                </div>

                <div className="portada-imagen" />
            </div>
        </section>
    );
}

export default Header