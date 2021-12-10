import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--dark-purple);
  color: white;
  display: flex;
  flex-direction: column;
  padding: 10px;
  h2 {
    text-align: center;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-content: center;
  }

  @media (min-width: 769px) {
    color: black;
    width: 265px;
    border: 1px solid var(--dark-purple);
    background-color: var(--light-green);
    border-radius: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;
