import Image from "next/image";
import { SectionTitle } from "../sectionTitle/section-title";

import "./experience.scss";


export function Experience(){
    return(
        <div className="experience">
            <SectionTitle text="Experiencia" />
            <p>Trabalho como desenvolvedor Full Stack em pequenos projetos freelance.</p>
        <div className="experience-time">
          <div className="experience-language">
            <Image src="/react.png" alt="React Logo" width={40} height={40} priority />

            <div className="experience-unit">
                <div className="experience-measure measure-2">
                    <span>2 anos</span>
                </div>
            </div>
          </div>
          <div className="experience-language">
            <Image src="/ts.png" alt="Typescript Logo" width={40} height={40} priority />
            <div className="experience-unit">
                <div className="experience-measure measure-1">
                    <span>1 ano</span>
                </div>
            </div>
          </div>
          <div className="experience-language">
            <Image src="/js.png" alt="Javascript Logo" width={40} height={40} priority />
            <div className="experience-unit">
                <div className="experience-measure measure-2">
                    <span>2 anos</span>
                </div>
            </div>
          </div>
          <div className="experience-language">
            <Image src="/java.png" alt="Java Logo" width={40} height={40} priority />
            <div className="experience-unit">
                <div className="experience-measure measure-1">
                    <span>1 ano</span>
                </div>
            </div>
          </div>
        </div>
        </div>
    )
}