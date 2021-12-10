import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: auto;
  margin: auto;
  padding: 0.6em 0 0;
  color: var(--dark-purple);
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  input {
    width: 90%;
    height: 40px;
    margin: auto;
    padding-left: 1rem;
    border-radius: 5px;
    border: 1px solid var(--light-gray);
    font-family: "Ubuntu", sans-serif;
    font-style: italic;

    &:hover {
      box-shadow: 0.4rem 0.4rem 0.4rem var(--purple-shadow);
    }
  }
  @media (min-width: 769px) {
    input {
      height: 50px;
    }
  }
`;
