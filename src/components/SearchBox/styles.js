import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  margin-bottom: 40px;
  text-align: center;

  input {
    width: 184px;
    padding: 6px;
    padding-left: 10px;
    border: none;
    border-radius: 10px 0 0 10px;
    font-family: "Ubuntu", serif;

    background-color: var(--light-gray);
    color: var(--dark-purple);
  }

  input:focus {
    outline: none;
  }

  input:focus::placeholder {
    transition: 0.3s;
    opacity: 0;
    transform: translatex(5px);
  }

  input:not(:focus)::placeholder {
    transition: 0.3s;
  }

  @media (min-width: 769px) {
    width: 100%;
    background-color: var(--light-gray);
    margin-top: 0;
    margin-bottom: 20px;
    padding: 15px;

    input {
      width: 200px;
      background-color: var(--white);
    }
  }

  @media (min-width: 1280px) {
    input {
      width: 420px;
    }
  }
`;

const Button = styled.button`
  width: 100px;
  border: none;
  border-radius: 0 10px 10px 0;
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  background-color: var(--green);
  color: var(--white);

  &&:hover {
    transition: 0.3s;
    background-color: var(--light-green);
    color: var(--dark-purple);
  }

  &&:not(:hover) {
    transition: 0.3s;
  }

  @media (min-width: 769px) {
    cursor: pointer;
  }
`;

export { Container, Button };
