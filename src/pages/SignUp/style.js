import styled from "styled-components";

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .advice {
    width: 75%;
  }

  h2 {
    color: var(--light-purple);
    font-style: italic;
    font-size: 2.5rem;
  }

  p {
    margin: 5px 0;
    font-size: 0.8em;
    color: black;
  }

  span {
    color: var(--light-purple);
    font-weight: 900;
  }

  .doll {
    display: none;
    z-index: -1;
    height: 600px;
  }

  @media (min-width: 769px) {
    .doll {
      display: inherit;
      position: absolute;
      top: 20%;
      left: 60%;
    }
  }
`;
