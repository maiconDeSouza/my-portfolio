import { PageTitle } from "../PageTitle/PageTitle";
import { ContainerMyStack } from "./MyStack.styles";
import { Tech } from '../Tech/Tech'
import { arrayTech } from "../../../db/tech";
export function MyStack(){
    return (
        <ContainerMyStack className="animate__animated animate__zoomInDown">
            <PageTitle text="TECNOLOGIAS" />
            <main>
                {
                    arrayTech.map(e => {
                        return (
                            <Tech 
                            url={e.url}
                            nameTech={e.nameTech}
                            text={e.text}
                            key={e.url}
                        />
                        )
                    })
                }
                
            </main>
        </ContainerMyStack>
    )
}