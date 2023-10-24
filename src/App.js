import Nav from './componentes/nav/Nav';
import Header from './componentes/Header/Header';
import SobreMi from './componentes/Sobre-mi/Sobremi';
import Habilidades from './componentes/Habilidades/Habilidades';
import Formacion from './componentes/Formacion/Formacion';
import Proyectos from './componentes/Proyectos/Proyectos';
import Footer from './componentes/Footer/Footer';

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <section id="sobremi">
        <SobreMi />
      </section>
      
      <section id="habilidades">
        <Habilidades />
      </section>

      <section id="formacion">
        <Formacion />
      </section>

      <section id="proyectos">
        <Proyectos />
      </section>
      <Footer />
    </div>
  );
}

export default App;
