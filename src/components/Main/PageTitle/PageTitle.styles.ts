import styled from "styled-components";

export const ContainerPageTitle = styled.header`
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

`