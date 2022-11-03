import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si"
import { MyImage } from "../MyImage/MyImage";
import { ContainerMyHome } from "./MyHome.styles";

export function MyHome(){
    return (
        <ContainerMyHome className="animate__animated animate__zoomIn">
            <MyImage />
             <h1>Olá, Eu sou o <span>Maicon</span></h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam explicabo rem 
                architecto accusamus nihil sit odio voluptates esse quas neque. Nostrum in voluptates 
                alias, quod laborum facere et maiores similique.
            </p>
            <div>
                <ul>
                    <li title="Github">
                        <a href="" title="Github">
                            <SiGithub size={18} title="Github" />
                        </a>
                    </li>
                    <li title="Linkedin">
                        <a href="" title="Linkedin">
                            <SiLinkedin size={18} title="Linkedin"/>
                        </a>
                    </li>
                    <li title="Instagram">
                        <a href="" title="Linkedin">
                            <SiInstagram size={18} title="Linkedin"/>
                        </a>
                    </li>
                </ul>
            </div>
        </ContainerMyHome>
    )
}