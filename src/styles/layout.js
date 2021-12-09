import styled from "styled-components";

export const Layout = styled.div`
  background-color: var(--light-purple);
  width: 320px;
  min-height: 100vh;
  margin: auto;

  header {
    width: 100%;
    height: 12vh;
    background-color: white;
    font-family: "Pacifico", cursive;
    color: var(--light-purple);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 0.5em 0.5em var(--purple-shadow);
  }

  h1 {
    text-shadow: 0 0 0.3em var(--green-shadow);
  }

  @media (min-width: 769px) {
    width: 100%;
    font-size: 1.5em;

    header {
      justify-content: flex-start;
      padding-left: 2em;
    }
  }
`;
