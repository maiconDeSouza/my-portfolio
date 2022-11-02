import styled from "styled-components";

export const ContainerNav = styled.nav`
    /* position: fixed; */
    width: 2.5rem;
    height: 18rem;
    background-color: ${props => props.theme["blue-4"]};
    border-radius: 20px;

    ul{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        li{
            cursor: pointer;

            a{
                width: 2rem;
                height: 2rem;
                

                display: flex;
                justify-content: center;
                align-items: center;

                svg{
                    color: ${props => props.theme["white-1"]};
                }
            }
            a.active{
                border: 2px solid ${props => props.theme["gold-3"]};
                border-radius: 50%;
                
                svg{
                    color: ${props => props.theme["gold-3"]};
                }
            }

            
        }
    }

    @media (max-width: 576px){
        position: fixed;
        z-index: 999;
        bottom: 0.5rem;
        width: 18rem;
        height: 2.5rem;

        ul{
            flex-direction: row;
        }
    }
`