import styled from "styled-components";

export const ContainerAboutMe = styled.section`
    max-height: 100%;
    padding: 1rem;

    background-color: ${props => props.theme["blue-4"]};
    border-radius: 50px;

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