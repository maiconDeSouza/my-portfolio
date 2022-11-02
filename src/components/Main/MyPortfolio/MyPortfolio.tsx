import { Briefcase } from "../Briefcase/Briefcase";
import { PageTitle } from "../PageTitle/PageTitle";
import { ContainerMyPotfolio } from "./MyPortfolio.styles";


export function MyPortfolio(){
    return (
        <ContainerMyPotfolio className="animate__animated animate__slideInUp">
            <PageTitle text="PORTFÓLIO"/>
            <main>
                <Briefcase 
                    end="https://raw.githubusercontent.com/maiconDeSouza/assets/master/todolist-ts-react/todo-web.gif"
                />
                <Briefcase 
                    end="https://raw.githubusercontent.com/maiconDeSouza/assets/master/crazy-login/crazy.gif"
                />

            </main>
        </ContainerMyPotfolio>
    )
}