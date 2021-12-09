import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--white);
  width: 330px;
  height: auto;
  border-radius: 20px;
  padding: 15px 0;
  transition: 0.5s;
  box-shadow: 0 2px 6px 0px var(--dark-purple);
  font-family: "Ubuntu", sans-serif;

  @media (min-width: 769px) {
    span:hover {
      cursor: pointer;
    }
  }
`;
