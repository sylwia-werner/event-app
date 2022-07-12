import { createGlobalStyle, css } from "styled-components";
import { buttonStyle } from "./components/button.style";
import { vars } from "./vars.style";

const global = css`
    *::before,
    *::after,
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: "Inter", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 1rem;
        background-color: var(--primary-background);
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
    }

    a {
        text-decoration: none;
        color: initial;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
            monospace;
    }

    :root {
        ${vars}
        ${buttonStyle}
    }
`;

export default createGlobalStyle`${global}`;
