import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --red: #fd385d;
        --yellow: #ffc783;
        --orange: #fd9581;
        --rose: #bd636e;
        --text-title: #2c2c2c;
        --text-body: #3a3a3a;
        --background: #ffffff;

        /* #E4E2D6
        #CFCFC3 */
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
        font-family: "Lora", serif;
        font-weight: lighter;
    }
    html {
        @media(max-width: 1080px) {
            font-size: 93.75%;
        }
        @media(max-width: 720px) {
            font-size: 87.5%;
        }
    }
`;
