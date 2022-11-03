import { ConatinerBriefcase } from "./Briefcase.style";
import { SiGithub } from "react-icons/si"
import { MdOutlineWeb } from "react-icons/md"
interface hostInterface {
    hostType: string;
    url: string;
}

interface objInterface {
    gif: string;
    nameProject: string;
    description: string;
    position?:string;
    host: hostInterface[];
    component: any;
}

interface PropsBriefcase{
    obj: objInterface
}


export function Briefcase({obj}:PropsBriefcase){
    return (
        <ConatinerBriefcase gif={obj.gif} position={obj.position}>
            <header>
                
            </header>
            <article>
                <h3>{obj.nameProject}</h3>
                <p>
                    {obj.description}
                </p>
                <ul>
                    {
                        obj.component.map((e:any) => {
                            return (
                                <li key={e.nameComponent} title={e.nameComponent}>
                                    {e.icon} {e.nameComponent}
                                </li>
                            )
                        })
                    }
                </ul>
            </article>
            <footer>
                <span>Confira todas as informações completas de desse projeto no GitHub.</span>
                <ul>
                    {
                        obj.host.map( e => {
                            if(e.hostType === 'github'){
                                return (
                                    <li key={e.url} title="Projeto no GitHub">
                                        <a href={e.url} target="_blank" title="Projeto no GitHub">
                                            <SiGithub size={25} title="Projeto no GitHub"/>
                                        </a>
                                    </li>
                                )
                            }else{
                                return (
                                    <li key={e.url} title="Projeto Funcionando">
                                        <a href={e.url} target="_blank" title="Projeto Funcionando">
                                            <MdOutlineWeb size={25} title="Projeto Funcionando"/>
                                        </a>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </footer>
        </ConatinerBriefcase>
    )
}