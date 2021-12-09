import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
body, div, h1, h2, p, button{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
}

:root{
    --roxo: #5d5fef;
    --roxo-claro: #a5a6f6
}

body{
    font-size: 16px;
    width: 100vw;
    height: 100vh;
    color: var();
    background-color: var();
}

`;
