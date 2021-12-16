import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
body, div, h1, h2, p, button,ul{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
}

html,
body {
    width: 100%;
    height: 100%;
}

body{
    font-size: 16px;
    width: 100vw;
    height: 100vh;
    color: var();
    background-color: #fff;
}

li {
    list-style: none;
}

:root{
    --light-purple: #A5A6F6;
    --purple: #5D5FEF;
    --purple-logo: #7879F1;
    --dark-purple: #1F161E; // black
    --green: #55B79D;
    --light-green: #ACE5E3;
    --gray: #474747;
    --light-gray: #C4C4C4;
    --pink: #FA9E9F;
    --success: #27A300;
    --error: #FF0000;
    --error-light: #FFEBEB;
    --yellow: #FBDC8E;
    --white: #FFFFFF;
    --purple-shadow: rgba(93,95,239,0.5);
    --green-shadow: rgba(85,183,157,0.5);
    --dark-shadow: rgba(31,22,30, 0.5);
    --opaque-dark-green: #354642;
    --opaque-light-green: #809791;
    --box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

#root {
    width: 100%;
    height: 100%;
}

@media (min-width: 769px) {
    body {
        background-color: #A5A6F6;
    }
}
`;
