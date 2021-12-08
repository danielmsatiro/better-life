import styled from "styled-components";

export const Container = styled.button`
  background: var(--second-color);
  color: var(--claro);
  height: 50px;
  border-radius: 0.5rem;
  border: 0;
  padding: 0 0.5rem;
  width: 80%;
  margin: 0 auto;
  font-weight: 600;
  transition: 0.5s;
  border: none;
  font-family: "Roboto Mono";

  :hover {
    border: 2px solid var(--second-color);
    background-color: var(--primary-color);
    color: var(--oscuro);
  }
`;
