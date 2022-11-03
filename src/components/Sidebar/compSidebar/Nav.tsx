import { FaHouseUser, FaUserAlt, FaStackOverflow, FaLaptopCode, FaComments } from 'react-icons/fa'
import { NavLink } from "react-router-dom";
import { ContainerNav } from "./Nav.styles";

export function Nav(){
    return (
        <ContainerNav>
            <ul>
                <li>
                    <NavLink to="/" title="Home">
                        <FaHouseUser size={18}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about-me" title="Quem sou">
                        <FaUserAlt size={18}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/stacks"title="Tecnologias">
                        <FaStackOverflow size={18}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" title="Portfólio">
                        <FaLaptopCode size={18}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" title="Contato">
                        <FaComments size={18}/>
                    </NavLink>
                </li>
            </ul>
        </ContainerNav>
    )
}