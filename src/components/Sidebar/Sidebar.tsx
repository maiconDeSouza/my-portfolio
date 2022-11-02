import { Nav } from "./compSidebar/Nav";
import { ContainerSidebar } from "./Sidebar.styles";
import logo from '../../assets/logo.png'


export function Sidebar(){
    return (
        <ContainerSidebar>
            <div>
                <img src={logo} alt="Logo Marca" />
            </div>
            <Nav />
            <div>

            </div>
        </ContainerSidebar>
    )
}