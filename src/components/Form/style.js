import styled from "styled-components";

export const Container = styled.form`
  background: white;
  color: var(--roxo-claro);
  width: 300px;
  height: auto;
  margin: 80px auto;
  border-radius: 20px;
  padding: 1rem 0;
  transition: 0.5s;
  box-shadow: 0 0 0.3rem 0.3rem var(--primary-shadow);
  font-family: "Ubuntu", sans-serif;
  font-style: italic;
  text-align: center;

  @media (min-width: 769px) {
    width: 400px;
    margin: 100px 0;
  }
`;
