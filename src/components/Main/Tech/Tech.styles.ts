import styled from "styled-components";

export const ContainerTech = styled.div`
    display: flex;
    width: 20rem;
    min-height: 9rem;
    border: 1px solid ${props => props.theme["gold-3"]};
    border-radius: 20px;


    .icon{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25%;
        padding: 0.5rem;
        img{
            width: 5rem;
        }
    }

    .nameTech{
        display: flex;
        flex-direction: column;
        padding: 1.5rem;
        gap: 0.5rem;

        span{
            font-size: 0.775rem;
        }
    }

    &:hover{
        .icon{
            transform: scale(1.2);
        }
    }
`