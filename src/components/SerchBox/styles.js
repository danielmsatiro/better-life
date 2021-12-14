import styled from "styled-components";

const Container = styled.div`
  position: relative;
  margin: 20px 0;
  text-align: center;

  input {
    padding: 6px;
    border: none;
    border-radius: 10px;
    font-family: "Ubuntu", serif;
    text-align: center;
    background-color: var(--light-gray);
    color: var(--dark-purple);
  }

  input:focus {
    outline: none;
  }

  input:focus::placeholder {
    transition: 0.3s;
    opacity: 0;
    transform: translateY(-3px);
  }

  input:not(:focus)::placeholder {
    transition: 0.3s;
  }

  @media (min-width: 769px) {
    width: 100%;
    background-color: var(--light-gray);
    margin-top: 0;
    text-align: left;
    padding: 15px 15px 15px 20px;

    input {
      text-align: left;
      background-color: var(--white);
    }
  }
`;

const Results = styled.div`
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 140%;
  transform: translateX(-50%);
  width: 80%;
  height: 80vh;
  border-radius: 15px;
  background-color: var(--light-green);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 769px) {
    width: 95%;
    height: 500px;
  }
`;

const BlackBar = styled.div`
  padding: 10px;
  border-radius: 15px 15px 0px 0px;
  font-size: 0.9rem;
  text-align: left;
  background-color: var(--dark-purple);
  color: var(--white);
`;

export { Container, Results, BlackBar };
