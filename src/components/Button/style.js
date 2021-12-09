import styled from "styled-components";

export const Container = styled.button`
  background: var(--purple);
  color: white;
  height: 40px;
  border-radius: 0.5rem;
  border: 0;
  width: 50%;
  margin: 0.7rem auto;
  font-weight: 600;
  transition: 0.5s;
  font-family: "Ubuntu", sans-serif;
  font-size: 0.8em;

  &:hover {
    border: 2px solid var(--purple);
    background-color: var(--light-green);
    color: var(--purple);
    box-shadow: 0 0 0.5em 0.5em var(--purple-shadow);
  }

  @media (min-width: 769px) {
    height: 50px;
  }
`;
