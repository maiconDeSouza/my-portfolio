import { ContainerPageTitle } from "./PageTitle.styles";

interface PropsPageTitle{
    text: string;
}

export function PageTitle({text}:PropsPageTitle){
    return (
        <ContainerPageTitle>
            <h2>{text}</h2>
            <div>
                <span></span><span></span><span></span>
            </div>
        </ContainerPageTitle>
    )
}