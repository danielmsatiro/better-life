import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
body, div, h1{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
}

li {
    list-style: none;
}

:root{
    --light-purple: #A5A6F6;
    --purple: #5D5FEF;
    --dark-purple: #1F161E;
    --green: #55B79D;
    --light-green: #ACE5E3;
    --gray: #474747;
    --light-gray: #C4C4C4;
    --pink: #FA9E9F;
    --success: #27A300;
    --error: #FF0000;
    --error-light: #FFEBEB;
    --yellow: #FBDC8E;
}

body{
    font-size: 16px;
    color: var();
    background-color: var();
}
`;
