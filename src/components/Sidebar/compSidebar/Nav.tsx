import { ChatCircle, Desktop, House, StackOverflowLogo, User } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { ContainerNav } from "./Nav.styles";

export function Nav(){
    return (
        <ContainerNav>
            <ul>
                <li>
                    <NavLink to="/">
                        <House size={23}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/teste">
                        <User size={23}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/1">
                        <StackOverflowLogo size={23}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/2">
                        <Desktop size={23}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/3">
                        <ChatCircle size={23}/>
                    </NavLink>
                </li>
            </ul>
        </ContainerNav>
    )
}