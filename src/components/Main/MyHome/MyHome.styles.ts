import styled from "styled-components";
import bgImage  from '../../../assets/star1.gif'

export const ContainerMyHome = styled.section`
    min-height: 100%;
    padding: 5rem;

    background-image: url(${bgImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    border-radius: 50px;

    h1{
        color: ${props => props.theme["white-1"]};
        font-size: 5rem;

        span{
            color: ${props => props.theme["gold-3"]};
        }
    }

    p{
        text-align: center;
        font-size: 1rem;
    }

    div{
        ul{
            width: 12rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            

            li{
                width: 2rem;
                height: 2rem;
                border: 1px solid ${props => props.theme["gray-1"]};
                border-radius: 50%;

                display: flex;
                justify-content: center;
                align-items: center;

                
                cursor: pointer;    
                
                &:hover{
                    border: 1px solid ${props => props.theme["gold-3"]};

                    a{
                        svg{
                            color: ${props => props.theme["gold-3"]};
                        }
                    }
                }
            }

            a{
                display: flex;
                justify-content: center;
                align-self: center;
                svg{
                    color: ${props => props.theme["gray-1"]};
                }
            }
        }
    }
`

