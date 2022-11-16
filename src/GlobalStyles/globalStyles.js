import { createGlobalStyle } from "styled-components";
import banner from "./banner.jpg";

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: "Poppins", sans-serif;
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        padding: 0 15px;
        background-image: url("${banner}");
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
    }
`;

export default GlobalStyle;