import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
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
                    <li>
                        <a href="">
                            <GithubLogo />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <LinkedinLogo />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <InstagramLogo />
                        </a>
                    </li>
                </ul>
            </div>
        </ContainerMyHome>
    )
}