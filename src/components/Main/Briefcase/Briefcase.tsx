import { ConatinerBriefcase } from "./Briefcase.style";


interface objInterface {
    gif: string;
    nameProject: string;
    description: string;
    position?:string;
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
            </footer>
        </ConatinerBriefcase>
    )
}