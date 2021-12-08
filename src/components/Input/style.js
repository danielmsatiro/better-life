import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: auto;
  margin: auto;
  padding: 0.7rem 0;
  color: var(--oscuro);
  font-size: 0.8rem;
  text-align: left;

  input {
    width: 100%;
    height: 50px;
    padding-left: 1rem;
    border-radius: 5px;
    border: 1px solid var(--second-color);
    background-color: var(--claro);
    &:hover {
      box-shadow: 0.4rem 0.4rem 0.4rem var(--primary-shadow);
    }
  }
`;
