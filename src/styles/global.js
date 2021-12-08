import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
body, div, h1{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
}

:root{
    
}

body{
    font-size: 16px;
    color: var();
    background-color: var();
}

`;
