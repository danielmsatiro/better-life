import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Results = styled.div`
  position: relative;
  width: 80%;
  height: 70vh;
  border-radius: 0 0 0px 15px;
  background-color: var(--light-green);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  overflow: auto;

  @media (min-width: 769px) {
    width: 90%;
    height: 450px;
  }

  @media (min-width: 1280px) {
    height: 360px;
  }
`;

const BlackBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: 10px 15px;
  border-radius: 15px 15px 0px 0px;
  font-size: 0.9rem;
  font-weight: 900;

  background-color: var(--dark-purple);
  color: var(--white);

  @media (min-width: 769px) {
    width: 90%;
  }

  @media (min-width: 1280px) {
  }
`;

const Button = styled.button`
  width: 20px;
  height: 20px;
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  background-color: var(--purple);
  color: var(--white);

  &&:hover {
    transition: 0.3s;
    background-color: var(--light-purple);
    color: var(--dark-purple);
    cursor: pointer;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GroupContainer = styled.div`
  width: 290px;
  border: 1px solid var(--dark-purple);
`;
const PaginationNest = styled.div`
  margin: 10px 0;
`;

const ButtonPg = styled.button`
  margin: 0 10px;
  width: 20px;
  height: 20px;
`;

export {
  Container,
  Results,
  BlackBar,
  Button,
  ButtonPg,
  Content,
  GroupContainer,
  PaginationNest,
};
