import styled from "styled-components";

export const ContainerImage = styled.img`
    width: 15rem;

    border-radius: 20px;
    border: 3px solid ${props => props.theme["blue-4"]};
    outline: 5px solid ${props => props.theme["gold-1"]};
`