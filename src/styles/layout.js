import styled from "styled-components";

export const Layout = styled.div`
  background-color: var(--roxo-claro);
  width: 320px;
  min-height: 100vh;
  margin: auto;

  header {
    width: 100%;
    height: 12vh;
    background-color: white;
    font-family: "Pacifico", cursive;
    color: var(--roxo-claro);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
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
