import { ContainerTech } from './Tech.styles'

interface PropsTech {
    url: string;
    nameTech: string;
    text: string
}

export function Tech({url, nameTech, text}:PropsTech){
    return (
        <ContainerTech>
            <div className="icon">
                <img src={url} alt="" />
            </div>
            <div className="nameTech">
                <strong>{nameTech}</strong>
                <span>{text}</span>
            </div>
        </ContainerTech>
    )
}