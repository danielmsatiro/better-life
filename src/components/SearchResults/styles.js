import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Results = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 500px;
  height: 70vh;
  border-radius: 0 0 0px 15px;
  background-color: var(--light-green);
  box-shadow: var(--box-shadow);
  margin: 0 auto;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--green);
    border-radius: 5px;
  }

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
  flex-wrap: wrap;
  width: 90%;
  max-width: 500px;
  padding: 10px 15px;
  border-radius: 15px 15px 0px 0px;
  font-size: 1rem;
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
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GroupContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 90%;
  max-width: 350px;
  margin: 10px 0;

  border-radius: 15px;
  background-color: var(--purple);

  header {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px 0;
    border-radius: 15px 15px 0px 0px;
    background-color: var(--dark-purple);
  }

  h3 {
    height: 19px;
    margin: 0;
    padding: 0 10px;

    font-size: 1rem;
    text-align: left;
    color: var(--white);
  }

  h4 {
    margin: 0;
    padding: 5px;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 600;
    background-color: var(--purple);
    color: var(--white);
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 0;
    width: auto;
    color: var(--purple);
    text-decoration: underline;
  }

  button {
    width: auto;
    margin: 5px 0 10px 0;
    padding: 8px;
    border: none;
    border-radius: 5px;
    box-shadow: var(--box-shadow);
    align-self: center;
    font-family: "Ubuntu", sans-serif;
    font-weight: 900;
    font-size: 0.9rem;
    color: var(--white);
  }

  button:hover {
    transition: 0.3s;
    filter: brightness(0.9);
  }

  button:not(:hover) {
    transition: 0.3s;
  }

  @media (min-width: 769px) {
    button {
      cursor: pointer;
    }
  }
`;

const SubSpan = styled.span`
  display: flex;
  align-items: center;
  margin: 0 10px;
  padding: 2px;
  border-radius: 5px;
  font-family: monospace;
  font-size: 0.8rem;
  font-weight: 900;
  background-color: var(--white);
  color: var(--success);
`;

const GroupInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 10px;
  background-color: var(--purple);
`;

const GroupCategory = styled.p`
  padding: 2px;
  font-weight: 900;
  background-color: var(--white);
  color: var(--dark-purple);
`;

const GroupDescription = styled.p`
  width: auto;
  margin-top: 5px;
  padding: 5px;
  border-radius: 5px;
  font-size: 0.9rem;
  line-height: 1.5;
  text-align: left;
  background-color: var(--white);

  span {
    padding: 2px;
    font-weight: 900;
    border-radius: 5px;

    background-color: var(--purple);
    color: var(--white);
  }
`;

const SubscribingNest = styled.div`
  display: flex;
  flex-direction: column;
`;

const PaginationNest = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;

  span {
    height: 20px;
    padding: 0 10px;
    background-color: var(--white);
  }

  button {
    width: 20px;
    height: 20px;
    border: none;
    font-weight: 900;
    background-color: var(--purple);
    color: var(--white);
  }

  button:hover {
    transition: 0.3s;
    background-color: var(--light-purple);
    color: var(--dark-purple);
  }

  @media (min-width: 769px) {
    button {
      cursor: pointer;
    }
  }
`;

const ButtonNext = styled.button`
  border-radius: 5px 0 0 5px;
`;

const ButtonPrev = styled.button`
  border-radius: 0 5px 5px 0;
`;

export {
  Container,
  Results,
  BlackBar,
  Button,
  ButtonNext,
  ButtonPrev,
  Content,
  GroupContainer,
  SubSpan,
  GroupCategory,
  GroupDescription,
  GroupInfo,
  SubscribingNest,
  PaginationNest,
};
