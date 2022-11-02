import styled from "styled-components";

export const ContainerMyStack = styled.section`
    height: 100%;
    padding: 1rem;
    background-color: ${props => props.theme["blue-4"]};
    border-radius: 50px;

    main{
        padding: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
    }
`