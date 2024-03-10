import Image from "next/image";
import "./header.scss";

interface HeaderProps{

}

export function Header(){
    return(
        <div className="header">
          <div>
            <h1>Olá, meu nome é Fabiano!👋 </h1>
            <h2>Desenvolvedor Full Stack</h2>
          </div>
            <Image
              src="/me.jpeg"
              alt="Vercel Logo"
              width={325}
              height={300}
              priority
            />
        
      </div>
    )
}