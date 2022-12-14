import styled from "styled-components";
import bgImage  from '../../../assets/star1.gif'


export const ContainerContact = styled.section`
    min-height: 100%;
    padding: 1rem;

    background-image: url(${bgImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    main{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5rem;

        div{
            a{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 1rem;

                h4{
                    color: ${props => props.theme["gold-3"]};
                }
                span{
                    color: ${props => props.theme["white-1"]};
                }
                svg{
                color: ${props => props.theme["gray-1"]};
            }
            
        }
    }

    .linkedin{
        a{
            &:hover{
                svg{
                    color: #0e76a8;
                }
            }
        }
    }

    .email{
        a{
            &:hover{
                svg{
                    color: aliceblue;
                }
            }
        }
    }

    .tel{
        a{
            &:hover{
                svg{
                    color: #25d366;
                }
            }
        }
    }
    }

    @media (max-width: 576px){
        gap: 5rem;
        main{
            flex-direction: column;
            gap: 0.5rem;
            margin-bottom: 4rem;
        }
    }
    
`
