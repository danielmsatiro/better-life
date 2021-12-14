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

  input, textarea {
    width: 90%;
    height: 40px;
    display: flex;
    flex-direction: column;
    margin: 5px 0;
    margin: auto;
    padding: 10px;
    padding-left: 1rem;
    border-radius: 5px;
    border: 2px solid var(--light-gray);
    font-family: "Ubuntu", sans-serif;
    font-style: italic;
    font-size: 0.9rem;
    background-color: var(--claro);

    &:focus {
      outline: none;
      border: 2px solid var(--dark-purple);
      transition: 0.3s;
    }

    &:not(:focus) {
      transition: 0.3s;
    }

    &:focus::placeholder {
      transition: 0.3s;
      opacity: 0;
      transform: translateX(5px);
    }

    &:not(:focus)::placeholder {
      transition: 0.3s;
    }

    @media (min-width: 769px) {
    }
  }
  textarea {
    width: 90%;
    height: 40px;
    display: flex;
    flex-direction: column;
    margin: 5px 0;
    margin: auto;
    padding: 10px;
    padding-left: 1rem;
    border-radius: 5px;
    border: 2px solid var(--light-gray);
    font-family: "Ubuntu", sans-serif;
    font-style: italic;
    font-size: 0.9rem;
    background-color: var(--claro);

    &:focus {
      outline: none;
      border: 2px solid var(--dark-purple);
      transition: 0.3s;
    }

    &:not(:focus) {
      transition: 0.3s;
    }

    &:focus::placeholder {
      transition: 0.3s;
      opacity: 0;
      transform: translateX(5px);
    }

    &:not(:focus)::placeholder {
      transition: 0.3s;
    }

`;
