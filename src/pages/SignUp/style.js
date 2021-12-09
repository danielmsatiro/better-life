import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: auto;
  margin: auto;

  /* h1.bigHeader {
    display: none;
    font-family: "Pacifico", cursive;
  } */

  .advice {
    width: 100%;
    text-align: left;
    padding-left: 1.5em;
  }

  h2 {
    color: var(--roxo);
  }

  p {
    font-size: 0.6em;
    color: black;
  }
  span {
    color: var(--roxo-claro);
  }

  .doll {
    display: none;
  }

  @media (min-width: 769px) {
    display: flex;
    justify-content: center;
    align-items: center;

    .doll {
      display: block;
    }
  }
`;
