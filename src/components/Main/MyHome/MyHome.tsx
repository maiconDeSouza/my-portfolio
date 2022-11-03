import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si"
import { MyImage } from "../MyImage/MyImage";
import { ContainerMyHome } from "./MyHome.styles";

export function MyHome(){
    return (
        <ContainerMyHome className="animate__animated animate__zoomIn">
            <MyImage />
             <h1>Olá, Eu sou o <span>Maicon</span></h1>
            <p>
                Muito Obrigado por visitar meu Portfólio! Conheça um pouco sobre mim e alguns dos
meus            projetos.
            </p>
            <div>
                <ul>
                    <li title="Github">
                        <a href="https://github.com/maiconDeSouza" title="Github" target="_blank">
                            <SiGithub size={18} title="Github" />
                        </a>
                    </li>
                    <li title="Linkedin">
                        <a href="www.linkedin.com/in/mcn09" title="Linkedin" target="_blank">
                            <SiLinkedin size={18} title="Linkedin"/>
                        </a>
                    </li>
                    <li title="Instagram">
                        <a href="" title="Linkedin" target="_blank">
                            <SiInstagram size={18} title="Linkedin"/>
                        </a>
                    </li>
                </ul>
            </div>
        </ContainerMyHome>
    )
}