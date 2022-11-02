import styled from "styled-components";

interface PropsBriefcase{
    end: string;
}

export const ConatinerBriefcase = styled.div<PropsBriefcase>`
    width: 30rem;
    height: 40rem;
    display: flex;
    flex-direction: column;
    

    
    
    
    header{
        height: 30rem;
        border: 1px solid ${props => props.theme["gold-3"]};
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        
        background-image: url(${props => props.end});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    main{
        height: 10rem;
        border-left: 1px solid ${props => props.theme["gold-3"]};
        border-right: 1px solid ${props => props.theme["gold-3"]};

        
    }

    footer{
        height: 10rem;
        border: 1px solid ${props => props.theme["gold-3"]};
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }
`