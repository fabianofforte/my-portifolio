import { Header } from "./components/header/header";
import "./styles/home.scss";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <div className="experience">
        <h3>Experiencia</h3>
        <p>Trabalhei como desenvolvedor FullStack em pequenos projetos freelance por 2 anos.</p>
        <div className="experience-time">

        </div>
        <div className="infos">
          <h3>Idioma</h3>
          <div className="languages-info">
            <span>🇺🇸 EN - Estudando</span>
            <span>🇧🇷 PT-BR - Nativo</span>
          </div>
          <h3>Formação</h3>
          <div className="educacional-info">
            <span>🎓</span>
            <span>Engenharia de Software - Faculdade Anhanguera (1º Semestre)</span><br />
            <span>🎓</span>
            <span>Tecnico Eletrônica - Escola Parobé</span>
          </div>
        </div>

        <div className="buttons">
          <div className="social">

          </div>
          <button>contact me</button>
        </div>
      </div>
      
    </main>
  );
}
