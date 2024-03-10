import { SectionTitle } from "../sectionTitle/section-title";
import "./information.scss";

interface InfoProps{

}

export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Languages" />
        <div className="languages-info">
          <span>🇺🇸 EN - Estudando</span>
          <span>🇧🇷 PT-BR - Nativo</span>
        </div>
        <SectionTitle text="Education" />
        <div className="educational-info">
          <span>🎓</span>
          <span>Engenharia de Software - Faculdade Anhanguera (1º Semestre)</span><br />
          <span>🎓</span>
          <span>Tecnico Eletrônica - Escola Parobé</span>
        </div>
      </div>
    )
}