import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --red: #E62E4D;
        --blue: #5429CC;
        --green: #33CC95;
        --blue-light: #6933ff;
        --text-title: #2c2c2c;
        --text-body: #3a3a3a;
        --background: #ffffff;
    }
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    html {
        @media(max-width: 1080px) {
            font-size: 93.75%;
        }
        @media(max-width: 720px) {
            font-size: 87.5%;
        }
    }
    button {
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed
    }
`;
