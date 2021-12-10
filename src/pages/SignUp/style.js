import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: auto;
  margin: auto;

  .advice {
    width: 100%;
    text-align: left;
    padding-left: 1.5em;
  }

  h2 {
    color: var(--purple);
  }

  p {
    font-size: 0.6em;
    color: black;
  }
  span {
    color: var(--light-purple);
    cursor: pointer;
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
