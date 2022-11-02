import styled from "styled-components";

export const ContainerAboutMe = styled.section`
    max-height: 100%;
    padding: 1rem;

    background-color: ${props => props.theme["blue-4"]};
    border-radius: 50px;


    header{

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.25rem;


        h2{
            color: ${props => props.theme["gold-3"]};
            font-size: 2rem;
        }

        div{
            display: flex;
            justify-content: flex-start;
            span{
                display: block;
                width: 3rem;
                border-top: 3px solid ${props => props.theme["gray-1"]};
            }

            span:nth-of-type(2){
                width: 6rem;
                border-top: 3px solid ${props => props.theme["gold-3"]};
            }
        } 
    }

    main{
        display: flex;
        height: 100%;
        padding: 1rem;

        article{
            display: flex;
            flex-direction: column;
            /* align-items: center; */
            justify-content: flex-start;
            flex: 1;
            gap: 1rem;

            .title{
                h1{
                    font-size: 2rem;
                    font-weight: 400;
                }

                h3{
                    color: ${props => props.theme["gold-3"]};
                }
            }

            .paragraph{
                p{
                    line-height: 1.6;
                    letter-spacing: 2px;
                    
                    span{
                        display: block;
                        font-size: 2rem;
                        color: ${props => props.theme["gold-3"]};
                    }
                }
                .emotion{
                    display: inline;
                    font-size: 0.875rem;
                }
                .emphasis{
                    color: ${props => props.theme["gold-3"]};
                }
            } 
        }
    }
`