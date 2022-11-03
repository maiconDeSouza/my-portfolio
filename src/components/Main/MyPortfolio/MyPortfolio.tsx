import { Briefcase } from "../Briefcase/Briefcase";
import { PageTitle } from "../PageTitle/PageTitle";
import { ContainerMyPotfolio } from "./MyPortfolio.styles";

import { arrPortfolio } from "../../../db/arrPortfolio";

export function MyPortfolio(){
    return (
        <ContainerMyPotfolio className="animate__animated animate__slideInUp">
            <PageTitle text="PORTFÓLIO"/>
            <main>
                {
                    arrPortfolio.map(obj => {
                       return <Briefcase obj={obj} key={obj.nameProject}/>
                    })
                }
                
            </main>
        </ContainerMyPotfolio>
    )
}