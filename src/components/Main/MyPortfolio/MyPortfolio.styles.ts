import styled from "styled-components";
import bgImage  from '../../../assets/star1.gif'

export const ContainerMyPotfolio = styled.section`
    min-height: 100vh;
    padding: 1rem;
    border-radius: 50px;

    background-color: ${props => props.theme["blue-4"]};

    main{
        padding: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 5rem;
    }
`