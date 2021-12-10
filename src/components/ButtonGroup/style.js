import styled from "styled-components";

export const Container = styled.button`
  border: none;
  background-color: transparent;
  font-weight: 600;
  font-family: "Ubuntu", sans-serif;
  font-size: 1rem;
  color: white;
  font-size: 12px;
  max-width: 100px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
  :active {
    color: var(--light-purple);
  }

  @media (min-width: 769px) {
    background: var(--green);
    color: var(--dark-purple);
    font-size: 20px;
    height: 40px;
    max-width: none;
    width: 200px;
    border-radius: 10px;
    border: 1px solid var(--dark-purple);
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);

    margin: 0.7rem auto;
    transition: background 0.5s;

    :hover {
      background: var(--yellow);
      text-decoration: none;
    }

    :active {
      position: relative;
      top: 2px;
      left: 2px;
      box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
      color: black;
    }
  }
`;
