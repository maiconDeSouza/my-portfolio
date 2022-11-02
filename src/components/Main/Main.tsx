import { Outlet } from "react-router-dom";
import { ContainerMain } from "./Main.styles";

export function Main(){
    return (
        <ContainerMain>
            <Outlet />
        </ContainerMain>
    )
}