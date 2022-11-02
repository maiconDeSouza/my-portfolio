import { createGlobalStyle } from "styled-components";

export const GloboStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }

    body{
        background-color: ${props => props.theme["blue-5"]};
        color: ${props => props.theme["gray-1"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input-security, textarea, button{
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    :root{
        --animate-duration: 2s;
    }

`