import styled from "styled-components";

export const ContainerSidebar = styled.aside`
    width: 128px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;


    div:nth-of-type(1){
        height: 6.25rem;

        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width: 5rem;
        }

    }
    div:nth-of-type(2){
        height: 6.25rem;
    }
    
    @media (max-width: 576px){
        width: 100%;

        div:nth-of-type(2){
            display: none;
        }
    }

    
`