import styled from "styled-components";

export const Container = styled.button`
  border: none;
  background-color: transparent;
  font-weight: 600;
  font-family: "Ubuntu", sans-serif;
  font-size: 1rem;
  color: white;

  @media (min-width: 769px) {
    background: var(--green);
    color: var(--dark-purple);
    height: 40px;
    border-radius: 1rem;
    border: 1px solid var(--dark-purple);
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);

    margin: 0.7rem auto;
    transition: background 0.5s;

    :hover {
      background: var(--light-green);
    }

    :active {
      background: var(--yellow);
      position: relative;
      top: 2px;
      left: 2px;
      box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
    }
  }
`;
