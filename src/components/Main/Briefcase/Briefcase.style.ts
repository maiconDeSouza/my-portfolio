import styled from "styled-components";

interface PropsBriefcase{
    gif: string;
    position: undefined | string
}

export const ConatinerBriefcase = styled.div<PropsBriefcase>`
    width: 30rem;
    min-height: 50rem;
    display: flex;
    flex-direction: column;
    

    
    
    
    header{
        height: 30rem;
        border: 1px solid ${props => props.theme["gold-3"]};
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        
        background-image: url(${props => props.gif});
        background-position: ${props => props.position || 'center'};
        background-repeat: no-repeat;
        background-size: cover;
    }

    article{
        min-height: 20rem;
        border-left: 1px solid ${props => props.theme["gold-3"]};
        border-right: 1px solid ${props => props.theme["gold-3"]};
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 2rem;

        h3{
            color: ${props => props.theme["gold-3"]};
        }

        ul{
            display: flex;
            justify-content: flex-start;
            gap: 1rem;
            flex-wrap: wrap;

            li{
                display: flex;
                align-items: center;
                gap: 0.3rem;
            }
        }
        
        
    }

    footer{
        height: 10rem;
        border: 1px solid ${props => props.theme["gold-3"]};
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;

        padding: 1rem 1rem;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        ul{
            display: flex;
            justify-content: center;
            gap: 1rem;

            li{
                width: 3rem;
                height: 3rem;
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
                a{
                    svg{
                        color: ${props => props.theme["gray-1"]};
                    }
                }
            }
        }
    }

    @media (max-width: 576px){
        
        header{
            height: 10rem;
            background-size: contain;
        }

        footer{
            ul{
                li{
                    width: 2rem;
                    height: 2rem;

                    a{
                        svg{
                            width: 18px;
                        }
                    }
                }
            }
        }
    }
`