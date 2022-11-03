import styled from "styled-components";
import bgImage  from '../../../assets/star1.gif'

export const ContainerMyStack = styled.section`
    min-height: 100%;
    padding: 1rem;
    
    border-radius: 50px;

    background-image: url(${bgImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    main{
        padding: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
    }

    @media (max-width: 576px){
        main{
            margin-bottom: 3rem;
        }
    }
`