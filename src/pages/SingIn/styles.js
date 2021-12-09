import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

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
`;

const Image = styled.img`
  position: absolute;
  display: none;
  left: 5%;
  bottom: 0;
  width: 600px;

  @media (min-width: 769px) {
    display: inherit;
  }
`;

export { Container, Image };
